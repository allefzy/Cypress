describe('buscar fotos e dados', () => {

    it('fazer login do flavio', () => {
        cy.request({
            method: 'POST',
            url: "https://apialurapic.herokuapp.com/flavio/login",
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal('Farol iluminado')
        }
        
        )
    })
})