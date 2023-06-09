/// <reference types="cypress" />

describe('Rede de agências', () => {
    beforeEach(() => {
        cy.visit('https://www.localiza.com/brasil/pt-br');
        cy.seletorRedeAgencias();
    })

    it('Pesquisar uma agência válida', () => {
        cy.agenciaValida();

    });

    it('Pesquisar uma agência inválida', () => {
        cy.agenciaInvalida();
    });
});


   