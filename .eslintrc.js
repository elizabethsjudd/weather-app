module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "eslint-plugin-tsdoc"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/strict",
    "next",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "tsdoc/syntax": "error",
  },
};
