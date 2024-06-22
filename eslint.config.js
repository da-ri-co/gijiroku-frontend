const nextPlugin = require('@next/eslint-plugin-next');
const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
  {
    ignores: ['**/.next/**/*'],
  },
  {
    languageOptions: {
      parser: typescriptParser,
    },
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin,
      '@typescript-eslint': typescriptPlugin,
      'unused-imports': unusedImports,
      import: importPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'unused-imports/no-unused-imports': 'error',
      '@next/next/no-img-element': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            Object: {
              message: 'Avoid using the `Object` type. Did you mean `object`?',
            },
            Function: {
              message:
                'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
            },
            Boolean: {
              message:
                'Avoid using the `Boolean` type. Did you mean `boolean`?',
            },
            Number: {
              message: 'Avoid using the `Number` type. Did you mean `number`?',
            },
            String: {
              message: 'Avoid using the `String` type. Did you mean `string`?',
            },
            Symbol: {
              message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
            },
          },
        },
      ],
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
      // "@typescript-eslint/dot-notation": "error",
      // "@typescript-eslint/no-floating-promises": "error",
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],
      '@typescript-eslint/unified-signatures': 'error',
      'constructor-super': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-blacklist': [
        'error',
        'any',
        'Number',
        'String',
        'string',
        'Boolean',
        'boolean',
        'Undefined',
        'undefined',
      ],
      'id-match': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      radix: 'error',
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],
      'use-isnan': 'error',
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/no-access-state-in-setstate': 'error',
    },
  },
];