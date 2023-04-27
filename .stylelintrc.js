module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-css-modules"
    ],
    formatter: "stylelint-checkstyle-formatter",
    plugins: [
      "stylelint-scss",
      'stylelint-sassdoc',
    ],
    rules: {
        // Using camelCase makes it easier to reference classes in JSX
        // and "--" denotes a modifier for a component
        'selector-class-pattern': '^([a-z][a-zA-Z0-9]+)?(--([a-z][a-zA-Z0-9]+)+){0,2}',
    },
};