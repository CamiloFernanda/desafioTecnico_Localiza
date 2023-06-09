/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.localiza.com/brasil/pt-br');
        cy.seletorLogin();
        
    })

    it('Não realizar login com credenciais inválidas', () => {
        cy.loginFalhou();
    });

});


   