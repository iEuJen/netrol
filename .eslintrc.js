module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  extends: "standard",
  plugins: ["@typescript-eslint"],
  rules: {
		"prefer-const": "off",
    "indent": "off",
    "eol-last": "off",
    "space-in-parens": "off",
    "operator-linebreak": "off",
    "no-trailing-spaces": "off",
    "quote-props": "off",
    "comma-dangle": "off",
    "standard/no-callback-literal": "off",
    "no-unused-vars": "off",
    "no-unreachable": "warn",
    "no-useless-constructor": "off"
  },
}