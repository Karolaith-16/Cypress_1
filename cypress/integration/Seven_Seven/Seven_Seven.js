describe("Test Seven Seven Page", function(){
    it ("Ir a la pagina Seven Seven", function(){
        cy.visit("https://www.sevenseven.com/");
        cy.url().should('include', 'seven');
        cy.get('.customIcon-arrow').click({force:true}).wait(500);
    });

    it ("Ingresar datos", function(){
        cy.get('.seg-popup-push-bttn-later-new').click();
        cy.get('.formulario > #form_registro_footer > :nth-child(2) > #cliente_email').type('koro0526@hotmail.com');
        cy.get('.formulario > #form_registro_footer > :nth-child(3) > #firstName').type('Karolayth');
        cy.get('.formulario > #form_registro_footer > :nth-child(4) > #lastName').type('Orozco');
        cy.get('.formulario > #form_registro_footer > :nth-child(5) > #cliente_celular').type('3553168877');
    });
})

