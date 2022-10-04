describe("test crypto info view", () => {
    it("should visit homepage", () => {
        cy.visit("http://localhost:3000")
    });
    it("should contain all components", () => {
        cy.contains("Name")
        cy.contains("Country")
        cy.contains("URL")
        cy.contains("Logo")
        cy.contains("Trust Rank")
    })
    it("should navigate to detail page", () => {
        cy.contains("Binance").click()
        cy.url().should("include", "/tableDetail")
        cy.contains("Back")
    })
    it("should go back to homepage", () => {
        cy.contains("Back").click()
        cy.url().should("eq", "http://localhost:3000/")
        cy.contains("Name")
        cy.contains("Country")
        cy.contains("URL")
        cy.contains("Logo")
        cy.contains("Trust Rank")
    })
});
