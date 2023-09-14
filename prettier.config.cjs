/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
  trailingComma: "es5",
  semi: true,
  tabWidth: 2,
  printWidth: 100,
};

module.exports = config;
