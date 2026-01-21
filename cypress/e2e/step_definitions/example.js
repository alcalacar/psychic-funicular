import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
const examplePage = require("../pages/examplePage.js");

Given("A", () => {
	examplePage.function();
});

Then("B", () => {});

When("C", () => {});
