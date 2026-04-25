import globals from 'globals';
import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
		rules: {
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-console': 'off',
			eqeqeq: ['error', 'always'],
		},
	},
	{
		ignores: ['dist/', 'node_modules/', 'coverage/'],
	},
];
