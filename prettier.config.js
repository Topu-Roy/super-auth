/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120,
  singleAttributePerLine: false,
  arrowParens: "avoid",
};

export default config;
