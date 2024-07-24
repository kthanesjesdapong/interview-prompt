module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-array-index-key': true,
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-fragments': 'error',
    'react/jsx-no-useless-fragment': true,
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/no-danger': true,
    'react/no-unstable-nested-components': 'error',
    //"react/jsx-max-depth": ["error", { max: 5 }],
    //react/function-component-definition": [
    //"warn",
    //{ namedComponents: "arrow-function" },
    //],
    // "react/no-children-prop": true
    // 'react/no-unused-prop-types': true,
    // "react/display-name": true,
    // 'react/jsx-no-bind': true,
    // 'react/prefer-read-only-props': true,
  },
};
