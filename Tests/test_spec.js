// test_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Register', () => {
    it('go-to-register', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[id=register_link]').click();
        cy.location('pathname').should('eq', '/register');
        cy.get('[id=registerName]').type('test123');
        cy.get('[id=registerEmail').type('test123@gmail.com');
        cy.get('[id=registerPassword').type('testPass');
        cy.get('[id=register_button]').click();
        cy.location('pathname').should('eq', '/Protected');
    });
    it('go-to-login-after-register', () => {
        cy.get('[id=logout-button]').click();
        cy.location('pathname').should('eq', '/register');
        cy.get('[id=login_link]').click();
        cy.get('[id=loginEmail').type('test123@gmail.com');
        cy.get('[id=loginPassword').type('testPass');
        cy.get('[id=login_button]').click();
        cy.location('pathname').should('eq', '/Protected');

    });
    it('go-to-protected-before-login-or-register', () => {
        cy.get('[id=logout-button]').click();
        cy.location('pathname').should('eq', '/register');
        cy.visit('http://localhost:3000/Protected');
        cy.location('pathname').should('eq', '/register');
    });
})

