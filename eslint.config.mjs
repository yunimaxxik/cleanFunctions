import js from '@eslint/js';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';

export default [
	{
		ignores: ['coverage/**', 'dist/**', 'node_modules/**'],
	},
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
		},
	},
	{
		files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
		plugins: {
			jest: jestPlugin,
		},
		languageOptions: {
			globals: {
				...jestPlugin.environments.globals.globals,
			},
		},
		rules: {
			...jestPlugin.configs.recommended.rules,
		},
	},
];
