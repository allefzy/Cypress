describe('Cadastro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verefica mensagens de Email invalido', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('jacquilne');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
    })

    it('verefica mensagens validação', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible') 
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Password is required!').should('be.visible')
        cy.contains('ap-vmessage','Full name is required!').should('be.visible')
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
    })

    it('verefica mensagens de Password', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

   it('verefica mensagens de Username', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Allefzy');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage',  'Must be lower case').should('be.visible');
    })


})