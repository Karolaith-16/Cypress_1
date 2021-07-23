describe("Test Seven Seven Page", function(){
    it ("Ir a la pagina Seven Seven", function(){
        cy.visit("https://www.sevenseven.com/");
    });

    it ("Ingresar datos", function(){
        cy.get('.seg-popup-push-bttn-later-new').click();
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(2) > #cliente_email').type('koro0526@hotmail.com');
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(3) > #firstName').type('Karolayth');
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(4) > #lastName').type('Orozco');
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(5) > #cliente_celular').type('3553168877');
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(6) > #document-type').select('Cédula de Ciudadanía');
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(7) > #cliente_documento').type('1458666458');
        cy.get('.wrapperSelects > #dia').select('20');
        cy.get('.wrapperSelects > #mes').select('Mayo');
        cy.get('.wrapperSelects > #anio').select('1998');
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(9) > .gender > :nth-child(1) > #female').click();
        cy.get('.SuscribeLetter > #form_registro_footer > :nth-child(10) > .checkbox > #check_politica_datos').click();
        cy.get('.wrapperButtonSubmit > #registro').click();
    });
})