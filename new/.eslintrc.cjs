module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['perfectionist', 'import', '@typescript-eslint', 'prettier', 'solid'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
		'plugin:solid/recommended',
		'plugin:perfectionist/recommended-natural',
	],
	rules: {
		'@typescript-eslint/explicit-member-accessibility': ['error', {
			accessibility: 'explicit',
			overrides: {
				constructors: 'no-public',
			},
		}],
		'@typescript-eslint/consistent-type-exports': 'warn',
		'@typescript-eslint/consistent-type-imports': ['warn', {
			fixStyle: 'inline-type-imports',
		}],
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'warn',
		'@typescript-eslint/naming-convention': ['error', {
			selector: 'interface',
			format: ['PascalCase'],
			custom: {
				regex: '[A-Z]',
				match: true,
			},
		}],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn', {
			argsIgnorePattern: '^_',
			destructuredArrayIgnorePattern: '^_',
			caughtErrorsIgnorePattern: '^ignore',
		}],
		'@typescript-eslint/no-var-requires': 'error',
		'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
		'import/no-relative-parent-imports': ['error', {
			ignore: ['../assets/'],
		}],
		'import/order': ['warn', {
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true,
			},
			pathGroups: [
				{
					pattern: 'solid-js',
					group: 'external',
					position: 'before',
				},
				{
					pattern: '{~,**..}/assets/**',
					'patternOptions': { 'matchBase': true },
					group: 'internal',
					position: 'after',
				},
				{
					pattern: '~/**',
					group: 'internal',
				},
				{
					pattern: '*.scss',
					'patternOptions': { 'matchBase': true },
					group: 'index',
					position: 'after',
				},
			],
		}],
		'no-mixed-spaces-and-tabs': 'warn',
		'no-restricted-imports': ['error', {
			patterns: [
				{
					group: ['*/features/*/*'],
					message: 'Please import from the index file instead',
				},
				{
					group: ['**.scss', '!./*.scss'],
					message: 'Styles should be defined in the same folder as the component, or imported within the scss file',
				},
			],
		}],
		'perfectionist/sort-array-includes': 'warn',
		'perfectionist/sort-astro-attributes': 'warn',
		'perfectionist/sort-classes': 'warn',
		'perfectionist/sort-enums': 'warn',
		'perfectionist/sort-exports': 'warn',
		// conflict with import/order
		'perfectionist/sort-imports': 'off',
		'perfectionist/sort-interfaces': 'warn',
		'perfectionist/sort-jsx-props': 'warn',
		'perfectionist/sort-maps': 'warn',
		'perfectionist/sort-named-exports': 'warn',
		'perfectionist/sort-named-imports': 'warn',
		'perfectionist/sort-object-types': 'warn',
		'perfectionist/sort-objects': 'warn',
		'perfectionist/sort-svelte-attributes': 'warn',
		'perfectionist/sort-union-types': 'warn',
		'perfectionist/sort-vue-attributes': 'warn',
		'prettier/prettier': ['warn', {
			endOfLine: 'auto',
		}],
		semi: ['warn', 'always'],
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
};
