#!/usr/bin/env node

// Publie `packages/core` sur npm sous le nom `@akimeo/publicodes`, sans que ce renommage
// n'apparaisse jamais dans le dépôt : la branche `publish` reste un rebase propre de
// l'amont augmenté des correctifs en attente, et seul le tarball porte le nom du fork.
// C'est ce qui rend la resynchronisation avec l'amont indolore — il n'y a aucun commit de
// packaging à reporter d'une version à l'autre.
//
//   node publish-fork.mjs                      # version déduite, publication réelle
//   node publish-fork.mjs --dry-run            # tout sauf l'envoi au registre
//   node publish-fork.mjs 1.11.0-fork.0        # version imposée
//
// Tout argument non reconnu comme un numéro de version est transmis tel quel à
// `npm publish` (`--dry-run`, `--otp=…`, `--tag=…`).

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const FORK_NAME = '@akimeo/publicodes'
const FORK_REPOSITORY = 'git+https://github.com/zhouzi/publicodes.git'

const root = path.dirname(fileURLToPath(import.meta.url))
const coreDir = path.join(root, 'packages', 'core')

// `capture` sert à lire la sortie d'une commande, `stream` à la donner à voir : un échec
// des tests ou du build doit afficher sa propre erreur, pas un tampon avalé par Node.
const capture = (command, args, cwd) =>
	execFileSync(command, args, { cwd, encoding: 'utf8', stdio: 'pipe' })

const stream = (command, args, cwd) =>
	execFileSync(command, args, { cwd, stdio: 'inherit' })

const step = (message) => console.log(`\n\x1b[1m▸ ${message}\x1b[0m`)

/**
 * Déduit la version à publier à partir de celle du core amont.
 *
 * Le suffixe se greffe sur la version amont *suivante*, jamais sur la version courante :
 * en semver, `1.10.1-fork.0` est une pré-version de 1.10.1, donc antérieure au 1.10.1
 * qu'on forke, et un `^1.10.1` ne la résoudrait jamais. On vise donc le patch suivant,
 * celui qui portera le correctif une fois accepté en amont.
 *
 * Le numéro de fork s'incrémente à partir de ce qui est déjà publié sur le registre, pour
 * qu'un deuxième correctif sur la même base amont ne rejoue pas un numéro pris.
 */
function deriveVersion(upstreamVersion) {
	const [major, minor, patch] = upstreamVersion.split('.').map(Number)
	const base = `${major}.${minor}.${patch + 1}`

	let published = []
	try {
		published = JSON.parse(
			capture('npm', ['view', FORK_NAME, 'versions', '--json']),
		)
	} catch {
		// Package absent du registre : première publication du fork.
	}

	const forkNumbers = [published]
		.flat()
		.map((version) => version.match(`^${base}-fork\\.(\\d+)$`))
		.filter(Boolean)
		.map(([, number]) => Number(number))

	const next = forkNumbers.length === 0 ? 0 : Math.max(...forkNumbers) + 1
	return `${base}-fork.${next}`
}

const args = process.argv.slice(2)
const versionArg = args.find((arg) => /^\d+\.\d+\.\d+-fork\.\d+$/.test(arg))
const npmArgs = args.filter((arg) => arg !== versionArg)

const manifest = JSON.parse(
	fs.readFileSync(path.join(coreDir, 'package.json'), 'utf8'),
)

step('Tests et build du core')
stream('yarn', ['test'], coreDir)
stream('yarn', ['build'], coreDir)

step('Préparation du paquet')
const version = versionArg ?? deriveVersion(manifest.version)
console.log(`  ${manifest.name}@${manifest.version} → ${FORK_NAME}@${version}`)

const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'akimeo-publicodes-'))
fs.cpSync(path.join(coreDir, 'dist'), path.join(stage, 'dist'), {
	recursive: true,
})
fs.cpSync(path.join(coreDir, 'README.md'), path.join(stage, 'README.md'))

// `devDependencies` et `scripts` n'ont aucun sens pour un consommateur du paquet, et
// `publishConfig.access` est indispensable : sans lui npm refuse de publier un paquet
// scopé, même dans une organisation publique. `scripts` est vidé plutôt que supprimé,
// sans quoi npm émet un « Removed invalid scripts » à chaque publication.
delete manifest.devDependencies
fs.writeFileSync(
	path.join(stage, 'package.json'),
	JSON.stringify(
		{
			...manifest,
			name: FORK_NAME,
			version,
			repository: { ...manifest.repository, url: FORK_REPOSITORY },
			publishConfig: { access: 'public' },
			scripts: {},
		},
		null,
		2,
	),
)

step(`npm publish ${npmArgs.join(' ')}`.trim())
stream('npm', ['publish', ...npmArgs], stage)
console.log(`\nPaquet assemblé dans ${stage}`)
