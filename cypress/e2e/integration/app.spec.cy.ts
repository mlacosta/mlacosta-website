describe("Navigation", () => {
  it("should load website", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
  });
  it("should visit routes", () => {
    cy.viewport(1920, 1024);
    cy.get("#portfolio").click();
    cy.url().should("include", "/portfolio");
    cy.get("#about").click();
    cy.url().should("include", "/about");
  });
});
