/// <reference types="cypress" />

import loc from '../support/locators/locators'

describe('Busca artigo inválido', () => {
    //Redirecionamento para tela home do blog
    beforeEach(() => {
        cy.visit("https://blogdoagi.com.br/")
    })

    it('Pesquisa um artigo não existente pelo ícone de lupa da tela principal', () => {
        //Garante que as imagens, menus e principais informações são corretamente carregados
        cy.get(loc.CARROSSEL_DE_SLIDES).should('be.visible')
        cy.get(loc.IMG_ULTIMASDOBLOG).should('be.visible')
        cy.get(loc.IMG_TDSOBREEMPRESTIMO).should('be.visible')
        cy.get(loc.CAMPO_EMAIL).should('be.visible')
        cy.get(loc.RODAPE).should('exist')
        //Realiza o clique no botão de lupa e a busca do artigo por palavras
        cy.get(loc.ICONE_DE_LUPA).click()
        cy.get(loc.CAMPO_DE_BUSCA).type('Qualidade de Software'+'{downarrow}{enter}', { delay: 150 })
        //Verifica a existência de uma nova tela sem resultados
        cy.get(loc.TEXTO_RESULTADO_BUSCA).should('be.visible')
        cy.get(loc.MSG_DE_RETORNO).should('contain', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
        cy.get(loc.CAMPO_DE_PESQUISA).should('exist')
    })

})
