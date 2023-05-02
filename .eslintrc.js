module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/strict",
		"next",
		"next/core-web-vitals",
		"plugin:storybook/recommended",
		"plugin:typescript-sort-keys/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier", "eslint-plugin-tsdoc"],
	root: true,
	rules: {
		indent: ["error", "tab"],
		"max-len": [
			"error",
			{
				code: 100,
				ignoreComments: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
				tabWidth: 1,
			},
		],
		"no-duplicate-imports": [
			"error",
			{
				includeExports: true,
			},
		],
		"no-mixed-spaces-and-tabs": "error",
		"prettier/prettier": "error",
		"react/jsx-sort-props": "error",
		"sort-imports": [
			"error",
			{
				allowSeparatedGroups: false,
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
			},
		],
		"sort-keys": [
			"error",
			"asc",
			{
				caseSensitive: false,
				minKeys: 2,
				natural: true,
			},
		],
		"tsdoc/syntax": "error",
	},
};
