/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended', // Official ESLint recommended rules
    'plugin:@typescript-eslint/strict-type-checked', // Recommended + strict TypeScript-specific linting rules from `@typescript-eslint` that require type information. Overrides conflicting rules from eslint:recommended.
    'plugin:@typescript-eslint/stylistic-type-checked', // Stylistic rules from `@typescript-eslint` that require type information.
    'next/core-web-vitals', // Adds plugins import, react, react-hooks, jsx-a11y, and overrides rules for Next.js
    'prettier', // Disables ESLint rules that conflict with Prettier
  ],
};

module.exports = config;
