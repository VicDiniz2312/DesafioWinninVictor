/// <reference types="cypress" />

describe('API Graphql do GraphqlZero', () => {
    it('Teste para a query user', () => {

        cy.request({
            method: 'POST',
            url: 'https://graphqlzero.almansi.me/api',
            body: {
                query: `
                    query {
                        user(id: 23) {
                                id
                                name
                                email
                            }
                        }
                    `,

            },

        }).then((response) => {

            expect(response.status).to.eq(200)

            expect(response.body).to.have.property('data')
        })
    })

})
