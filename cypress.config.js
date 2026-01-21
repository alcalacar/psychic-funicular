// cypress.config.js
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createBundlerEs = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
	await preprocessor.addCucumberPreprocessorPlugin(on, config);

	on(
		"file:preprocessor",
		createBundlerEs({
			plugins: [createEsbuildPlugin.default(config)],
		})
	);

	on("before:browser:launch", (browser, launchOptions) => {
		const width = 2000;
		const height = 1500;

		if (browser.family === "chromium" && browser.name !== "electron") {
			launchOptions.args.push(`--window-size=${width},${height}`);
			launchOptions.args.push("--content-shell-hide-toolbar");
			launchOptions.args.push("--hide-scrollbars");
			launchOptions.args.push("--top-controls-hide-threshold");
			launchOptions.args.push("--force-device-scale-factor=1");
		}

		if (browser.name === "electron" && browser.isHeadless) {
			// fullPage screenshot size
			launchOptions.args.preferences.width = width;
			launchOptions.args.preferences.height = height;
		}

		if (browser.name === "firefox" && browser.isHeadless) {
			// menubars take up height on the screen
			launchOptions.args.push(`--width=${width}`);
			launchOptions.args.push(`--height=${height}`);
		}

		return launchOptions;
	});
	// Make sure to return the config object as it might have been modified by the plugin.
	return config;
}

module.exports = defineConfig({
	e2e: {
		setupNodeEvents,
		specPattern: "cypress/e2e/features/**/*.feature",
		defaultCommandTimeout: 40000,
		experimentalModifyObstructiveThirdPartyCode: true,
		videoCompression: false,
		trashAssetsBeforeRuns: true,
		viewportWidth: 1920,
		viewportHeight: 1080,
		baseUrl: "appUrl",
		env: {},
	},
});
