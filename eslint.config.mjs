import pluginJs from '@eslint/js';

import tseslint from 'typescript-eslint';

import pluginReact from 'eslint-plugin-react';

import unusedImports from 'eslint-plugin-unused-imports';

import prettier from 'eslint-plugin-prettier';

import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
      prettier: prettier,
      import: importPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'react-native/no-inline-styles': 'off',
      'import/newline-after-import': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      // Prettier integration
      'prettier/prettier': 'error',

      // Other ESLint rules
      'no-unused-vars': 'off', // Disable base rule in favor of `unused-imports/no-unused-vars`
      'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'import', next: '*' }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
