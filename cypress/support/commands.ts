// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("shouldLogin", () => {
  const phone = "09111111111";
  const code = "55555";
  cy.visit("");
  cy.findByLabelText(/شماره تلفن/).should("exist");
  cy.findByLabelText(/شماره تلفن/).type(phone);
  cy.findAllByTestId("phone_submit").click();
  cy.findByLabelText(/کد ارسالی/).type(code);
  cy.findAllByTestId("login_btn").click();
  cy.url().should("eq", Cypress.config().baseUrl);
});

Cypress.Commands.add("loginWithToken", ({ accesstoken, refreshtoken }) => {
  cy.window().then((win) => {
    win.localStorage.setItem("acc", accesstoken);
    win.localStorage.setItem("ref", refreshtoken);
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
