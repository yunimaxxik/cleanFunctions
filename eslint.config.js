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
      'semi': ['error', 'always'],     // Точка с запятой в конце строк
      'quotes': ['error', 'single'],   // Одинарные кавычки
      'indent': ['error', 2],          // Отступ в 2 пробела
      'space-infix-ops': 'error',      // Пробелы вокруг операторов (например, a + b)
      'eol-last': ['error', 'always'],
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'coverage/'],
  },
];
