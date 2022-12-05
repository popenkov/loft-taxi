module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'react', 'simple-import-sort', 'import'],
  rules: {
    'no-console': 1,
    'prettier/prettier': 1,
    'import/no-cycle': 0,
    'import/default': 0,
    'no-unused-vars': 1,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 1,
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'methods'] }],
    'simple-import-sort/exports': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@(react)',
            group: 'external',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/prop-types': 0,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
    'lib',
    'dir',
    'config',
    'scripts',
  ],
};
