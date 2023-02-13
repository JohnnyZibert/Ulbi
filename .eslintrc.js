module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    // 'react/jsx-indent': [2, 4],
    // 'react/jsx-indent-props': [2, 4],
    // indent: [2, 4],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/consistent-type-imports': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/react-in-jsx-scope': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    'import/extensions': ['off'],
    'i18next/no-literal-string': ['error', { markupOnly: true }]
  }
}