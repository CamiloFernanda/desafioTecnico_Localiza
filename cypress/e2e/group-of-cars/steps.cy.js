/// <reference types="cypress" />

describe('Grupos de carros', () => {
  beforeEach(() => {
    cy.visit('https://www.localiza.com/brasil/pt-br');
    cy.seletorGrupoCarros();
  })

  it('Visualizar os grupos de carros', () => {
    cy.visualizarGrupos();
  })
})

