describe("should fill phone number input", () => {
  it("should redirect to login page ", () => {
    cy.visit("");
    cy.url().should("eq", Cypress.config().baseUrl + "login");
  });

  it("should show data when have valid access token", () => {
    cy.window().then((win) => {
      win.localStorage.setItem(
        "acc",
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjgyMmJhMDIxLWQyNjctNGI5Yy1hYTY5LTBkZGY4ZGMyZmVkMiIsIk5hbWUiOiLYs9uM2YbYpyDYp9io2LHYp9mH24zZhduMIiwiUGhvbmUiOiIwOTExMTExMTExMSIsIkVtYWlsIjoiTi9BIiwiQXZhdGFyIjoiaHR0cDovLzIxNy4yMTkuMTY1LjIyOjUwMDUvVXBsb2Fkcy9BdmF0YXJzLzgyMmJhMDIxLWQyNjctNGI5Yy1hYTY5LTBkZGY4ZGMyZmVkMi5qcGciLCJDcmVkaXQiOiIwIiwiVHlwZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjI4Njk0MDA5LCJleHAiOjE2Mjg3MTU2MDksImlhdCI6MTYyODY5NDAwOX0.dYDVvOng5qFJYPOTudZWU2iN8fhXovvB-BtZ-lKiXQFEUypCpsJ_bAW_trSdEnFhXKoxqVJLk4LQgz9ZU4ZiYQ"
      );
    });
    cy.visit("");
  });

  it("should show data when have valid refresh token", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("ref", "0e467a84-1f1f-47b5-a7a2-69fb80bc31a3");
    });
    cy.visit("");
  });

  it("should redirect to login page when refresh token in not valid", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("ref", "0e467a84-1f1f-47");
    });
    cy.url().should("eq", Cypress.config().baseUrl + "login");
  });
  it("should redirect to login page when access token in not valid", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("acc", "0e467a84-1f1f-47");
    });
    cy.url().should("eq", Cypress.config().baseUrl + "login");
  });
  it("should login with admin acc", () => {
    // @ts-ignore
    cy.shouldLogin();
  });

  it("login win tokens", () => {
    // @ts-ignore
    cy.loginWithToken({
      accesstoken:
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjgyMmJhMDIxLWQyNjctNGI5Yy1hYTY5LTBkZGY4ZGMyZmVkMiIsIk5hbWUiOiLYs9uM2YbYpyDYp9io2LHYp9mH24zZhduMIiwiUGhvbmUiOiIwOTExMTExMTExMSIsIkVtYWlsIjoiTi9BIiwiQXZhdGFyIjoiaHR0cDovLzIxNy4yMTkuMTY1LjIyOjUwMDUvVXBsb2Fkcy9BdmF0YXJzLzgyMmJhMDIxLWQyNjctNGI5Yy1hYTY5LTBkZGY4ZGMyZmVkMi5qcGciLCJDcmVkaXQiOiIwIiwiVHlwZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjI4Njk0MDA5LCJleHAiOjE2Mjg3MTU2MDksImlhdCI6MTYyODY5NDAwOX0.dYDVvOng5qFJYPOTudZWU2iN8fhXovvB-BtZ-lKiXQFEUypCpsJ_bAW_trSdEnFhXKoxqVJLk4LQgz9ZU4ZiYQ",
      refreshtoken: "0e467a84-1f1f-47b5-a7a2-69fb80bc31a3",
    });
    cy.visit("");
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
