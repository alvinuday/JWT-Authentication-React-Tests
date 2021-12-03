describe('Register', () => {
    it('register new user and check wether it redirects to protected page', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('[id=register_link]').click();
        cy.location('pathname').should('eq', '/register');
        cy.get('[id=registerName]').type('test123');
        cy.get('[id=registerEmail').type('test123@gmail.com');
        cy.get('[id=registerPassword').type('testPass');
        cy.get('[id=register_button]').click();
        cy.location('pathname').should('eq', '/protected');
    });
    it('try login after registering new user and check wether it redirects to protected page', () => {
        cy.get('[id=logout-button]').click();
        cy.location('pathname').should('eq', '/register');
        cy.get('[id=login_link]').click();
        cy.get('[id=loginEmail').type('test123@gmail.com');
        cy.get('[id=loginPassword').type('testPass');
        cy.get('[id=login_button]').click();
        cy.location('pathname').should('eq', '/protected');

    });
    it('check redirection for unauthorized access to protected page', () => {
        cy.get('[id=logout-button]').click();
        cy.location('pathname').should('eq', '/register');
        cy.visit('http://localhost:3000/protected');
        cy.location('pathname').should('eq', '/register');
    });
    it('Empty fields validation for register',()=>{
        cy.visit('http://localhost:3000/register');
        cy.get('[id=registerName]').clear();
        cy.get('[id=registerEmail').clear();
        cy.get('[id=registerPassword').clear();
        cy.get('[id=register_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');

        cy.get('[id=registerName]').type('text');
        cy.get('[id=registerEmail').clear();
        cy.get('[id=registerPassword').clear();
        cy.get('[id=register_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');
        
        cy.get('[id=registerName]').type('text');
        cy.get('[id=registerEmail').type('email@test.com');
        cy.get('[id=registerPassword').clear();
        cy.get('[id=register_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');
        
        cy.get('[id=registerName]').type('text');
        cy.get('[id=registerEmail').clear();
        cy.get('[id=registerPassword').type('pass');
        cy.get('[id=register_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');
    })
    it('Incorrect Email validation for register',()=>{
        cy.visit('http://localhost:3000/register');
        cy.get('[id=registerName]').type('text');
        cy.get('[id=registerEmail').type('text@');
        cy.get('[id=registerPassword').type('text');
        cy.get('[id=register_button]').click();
        cy.get('[id=errorMessage]').contains('Enter a valid Email');
    })
    it('Empty fields validation for login',()=>{
        cy.visit('http://localhost:3000/login');
        cy.get('[id=loginEmail').clear();
        cy.get('[id=loginPassword').clear();
        cy.get('[id=login_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');

        cy.get('[id=loginEmail]').type('text');
        cy.get('[id=loginPassword').clear();
        cy.get('[id=login_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');
        
        cy.get('[id=loginEmail').type('email@test.com');
        cy.get('[id=loginPassword').clear();
        cy.get('[id=login_button]').click();
        cy.get('[id=errorMessage]').contains('Fields cannot be left blank');
        
        
    })
        it('Incorrect Email validation for login',()=>{
            cy.visit('http://localhost:3000/login');
            cy.get('[id=loginEmail').type('text@');
            cy.get('[id=loginPassword').type('text');
            cy.get('[id=login_button]').click();
            cy.get('[id=errorMessage]').contains('Enter a valid Email');
        })
    
})

