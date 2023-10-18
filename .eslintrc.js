/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["next", "next/core-web-vitals", "turbo", "prettier"],
  ignorePatterns: ["node_modules", "dist"],
  plugins: ["unused-imports"],
  settings: {
    next: {
      rootDir: ["web/*", "packages/*/"],
    },
  },
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@next/next/no-html-link-for-pages": "off",
  },
};
