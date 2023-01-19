describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it.only('fazer login de usuario valido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('fazer login de usuario invalido', () => {
        cy.login('jacqueline',  '1234');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('invalid user name or password')
        })
    })

})