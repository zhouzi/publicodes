import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	{
		// Allow ESLint to understand TypeScript project references
		languageOptions: {
			parserOptions: {
				projectService: true,
				// projectService: {
				// 	defaultProject: 'tsconfig.json',
				// },
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'no-console': 'error',
		},
	},
	eslintConfigPrettier,
	{
		ignores: [
			'build/',
			'dist/',
			'examples/',
			'**/eslint.config.js',
			'.yarn',
			'.typedoc/',
			'packages/codemod/update-v1.js',
			// Script d'outillage autonome, hors du projet TypeScript et volontairement bavard.
			'publish-fork.mjs',
		],
	},
)
