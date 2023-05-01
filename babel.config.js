module.exports = (api) => {
	const isTest = api.env("test");

	const jestConfg = {
		presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
	};

	const nextJSConfig = {
		presets: ["next/babel"],
	};

	return isTest ? jestConfg : nextJSConfig;
};
