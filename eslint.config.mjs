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
      'prettier/prettier': 'error',
      // 'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      // 'import/newline-after-import': 'error',
      // 'import/no-relative-packages': 'error',
      // 'import/order': [
      //   'error',
      //   {
      //     groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      //     'newlines-between': 'always',
      //     alphabetize: { order: 'asc', caseInsensitive: true },
      //     pathGroups: [
      //       {
      //         pattern: 'react-native',
      //         group: 'builtin',
      //       },
      //       {
      //         pattern: 'react',
      //         group: 'builtin',
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ['react', 'react-native'],
      //   },
      // ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
