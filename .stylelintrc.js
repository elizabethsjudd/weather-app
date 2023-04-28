module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-css-modules"
    ],
    formatter: "stylelint-checkstyle-formatter",
    plugins: [
        "stylelint-order",
        "stylelint-scss",
        'stylelint-sassdoc',
    ],
    rules: {
        // @todo - This is deprecated in favor of prettier which needs to be finished setting up
        "indentation": "tab",
        "max-nesting-depth": [
			1,
			{
				"ignore": [
					"blockless-at-rules",
					"pseudo-classes"
				]
			}
		],
        "order/properties-alphabetical-order": true,
        "sassdoc/atExample": [
			true,
			{
				"severity": "warning"
			}
		],
		"sassdoc/atName": true,
		"sassdoc/atParameter": true,
		"sassdoc/atReturn": true,
		"sassdoc/function-is-documented": true,
		"sassdoc/mixin-is-documented": true,
		"sassdoc/poster-comment": true,
		"sassdoc/variable-has-type": true,
        // Using camelCase makes it easier to reference classes in JSX
        // and "--" denotes a modifier for a component
        'selector-class-pattern': '^([a-z][a-zA-Z0-9]+)?(--([a-z][a-zA-Z0-9]+)+){0,2}',
        "selector-max-id": 0
    },
};