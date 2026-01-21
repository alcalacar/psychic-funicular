class examplePage {
	elements = {
		//Login
		elemento: () => cy.get("div"),
	};

	/**
	 * @param {string} user - El correo del usuario
	 */

	function(user) {
		cy.visit("/");
	}
}

module.exports = new examplePage();
