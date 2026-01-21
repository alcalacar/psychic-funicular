// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.Screenshot.defaults({
	capture: "viewport",
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("uncaught:exception", (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

// Comando predeterminado para que no aparezcan los Fetch en el Log del Test Runner:

const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (
		opts.displayName == "xhr" ||
		(opts.displayName === "fetch" && opts.url.startsWith("https://"))
	) {
		return;
	}
	return origLog(opts, ...other);
};
