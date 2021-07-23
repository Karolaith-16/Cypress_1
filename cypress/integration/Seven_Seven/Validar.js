describe("Test Seven Seven Page", function(){
    it ("Ir a la pagina Seven Seven", function(){
        cy.visit("https://www.sevenseven.com/");
        cy.url().should('include', 'seven');
    });


})