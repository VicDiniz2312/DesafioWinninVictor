/// <reference types="cypress" />

import loc from '../support/locators/locators'

describe('Acesso a página da Wikipedia', () => {
    beforeEach(() => {
        cy.visit("https://www.wikipedia.org/") 
    })

    it('Pesquisa por Brasil verificando o resultado da busca', () => {
        //Garante a existência dos principais elementos nessa página principal
        //Título wikipedia
        cy.get(loc.LOGO_TOPO_WIKIPEDIA).should('be.visible')
        //Painel wikipedia
        cy.get(loc.PAINEL_WIKIPEDIA).should('be.visible')
        //Busca pelo termo Brasil
        cy.get(loc.LUPA_BTN).should('exist')
        cy.get(loc.INPUT_BUSCA).should('be.visible').type('Brasil'+'{downarrow}{enter}', { delay: 250 })
        //Garante a existência dos principais elementos nessa Segunda página 
        cy.get(loc.LOGO_TOPO_WIKIPEDIA2).should('exist')
        cy.get(loc.TXT_BRASIL).should('contain', 'Brasil')
        cy.get(loc.PAINEL).should('be.visible')
        //Realiza um scroll para descer a página
        cy.scrollTo('bottom', { duration: 1000 })
        cy.get(loc.RODAPE).should('be.visible')
    })

})
