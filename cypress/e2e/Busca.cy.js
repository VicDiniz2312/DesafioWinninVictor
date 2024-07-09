/// <reference types="cypress" />

import loc from '../support/locators/locators'

describe('Acesso a página da Wikipedia', () => {
    beforeEach(() => {
        cy.visit("https://www.wikipedia.org/")
    })

    it('Pesquisa por Brasil e verifica o resultado', () => {
        //Garante a existência dos principais elementos nessa página principal
        //title wikipedia
        cy.get('.central-textlogo__image').should('be.visible')
        //painel wikipedia
        cy.get('.central-featured').should('be.visible')
        //busca pelo termo Brasil
        cy.get('.pure-button').should('exist')
        cy.get('#searchInput').should('be.visible').type('Brasil'+'{downarrow}', { delay: 250 })
        // cy.get(loc.IMG_ULTIMASDOBLOG).should('be.visible')
        // cy.get(loc.IMG_TDSOBREEMPRESTIMO).should('be.visible')
        // cy.get(loc.CAMPO_EMAIL).should('be.visible')
        // cy.get(loc.RODAPE).should('exist')
        // //Realiza o clique no botão de lupa e a busca do artigo por palavras
        cy.get('.pure-button').click()
        // cy.get(loc.CAMPO_DE_BUSCA).type('Demografia'+'{downarrow}{enter}', { delay: 150 })
        // //Verifica a existência de uma nova tela com o resultado da busca efetuada
        // cy.get(loc.TEXTO_RESULTADO_BUSCA).should('exist')
        // //Valida os dados relacionados a busca efetuada
        cy.get('.mw-logo').should('exist')
        cy.get('.mw-page-title-main').should('contain', 'Brasil')
        // cy.get(loc.PAG1).should('not.be.exist')
        cy.get('.mw-content-ltr > :nth-child(4)').should('be.visible')
        cy.scrollTo('bottom', { duration: 1000 })
        // //Clica para visualizar o conteúdo do artigo
        // cy.intercept('GET', `https://blogdoagi.com.br/demografia-produtividade-e-o-desafio-do-crescimento-economico-no-brasil/?relatedposts=1`).as('relatedposts')
        // cy.get(loc.TITULO_ARTIGO).click()
        // cy.wait('@relatedposts')
        // //Verifica os dados relacionados ao conteúdo do artigo
        cy.get('#footer-info-copyright').should('be.visible')
        // cy.get(loc.TEXTO_ARTIGO).should('be.visible')
        // //Movimenta a barra de rolagem lateral para exibir o rodapé da página
        // cy.scrollTo('bottom')
        // //Valida a exibição dos links de paginação
        // cy.get(loc.NAVEGACAO).should('be.visible')
    })

})
