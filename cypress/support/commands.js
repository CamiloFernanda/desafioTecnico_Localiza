
Cypress.Commands.add('seletorRedeAgencias', () => {
    cy.get('.material-icons').click();
    cy.get(':nth-child(4) > .mat-focus-indicator').click();
});

Cypress.Commands.add('agenciaValida', () => {

    cy.get('#inputPesquisar').type('Barreiro');
    cy.get('.agencia-button.ng-star-inserted').click();
    cy.get('.titulo-flex__cidade-titulo').should('be.visible');
    cy.get('.titulo-flex__agencia-titulo').should('be.visible');
    cy.get('.localizacao__endereco').should('be.visible');
    cy.get('.localizacao__telefone').should('be.visible');
    cy.get('.localizacao__whatsapp').should('be.visible');
    cy.get('.horarios-funcionamento__descricao').should('be.visible');
    cy.get('.horarios-excecoes__titulo').should('be.visible');

});

Cypress.Commands.add('agenciaInvalida', () => {
    cy.get('#inputPesquisar').type('Localiza');
    cy.get('.carregando-listagem__erro-busca-agencias > p').should('be.visible');

})

Cypress.Commands.add('seletorGrupoCarros', () => {
    cy.get('.material-icons').click();
    cy.get(':nth-child(3) > .mat-focus-indicator').click();
})

Cypress.Commands.add('visualizarGrupos', () => {
    cy.get('div:nth-child(n) > ds-new-group-car > .new-group-car > .new-group-car-content').should('be.visible');
})

Cypress.Commands.add('seletorLogin', () => {
    cy.get('[data-testid="loc-login"]').click();
})

Cypress.Commands.add('loginFalhou', () => {
    cy.get('.mat-form-field.ng-tns-c72-6 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('camilofernanda340@gmail.com');
    cy.get('.mat-form-field.ng-tns-c72-7 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('fernandA123');
    cy.get('[data-testid="btnEntrar"] > .ng-star-inserted').click();
    cy.get('.toast-erro').should('be.visible');
    cy.get('.descricao').should('be.visible');
})