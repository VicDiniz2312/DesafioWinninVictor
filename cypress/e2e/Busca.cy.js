/// <reference types="cypress" />

import loc from '../support/locators/locators'

describe('Busca determinado artigo válido', () => {
    //Redirecionamento para tela home do blog
    beforeEach(() => {
        cy.visit("https://blogdoagi.com.br/")//test
    })

    it('Pesquisa um artigo pelo ícone de lupa da tela principal', () => {
        //Garante que as imagens, menus e principais informações são corretamente carregados
        cy.get(loc.CARROSSEL_DE_SLIDES).should('be.visible')
        cy.get(loc.IMG_ULTIMASDOBLOG).should('be.visible')
        cy.get(loc.IMG_TDSOBREEMPRESTIMO).should('be.visible')
        cy.get(loc.CAMPO_EMAIL).should('be.visible')
        cy.get(loc.RODAPE).should('exist')
        //Realiza o clique no botão de lupa e a busca do artigo por palavras
        cy.get(loc.ICONE_DE_LUPA).click()
        cy.get(loc.CAMPO_DE_BUSCA).type('Demografia'+'{downarrow}{enter}', { delay: 150 })
        //Verifica a existência de uma nova tela com o resultado da busca efetuada
        cy.get(loc.TEXTO_RESULTADO_BUSCA).should('exist')
        //Valida os dados relacionados a busca efetuada
        cy.get(loc.ARTIGO).should('be.visible')
        cy.get(loc.SUB_TITULO).should('contain', 'Colunas')
        cy.get(loc.PAG1).should('not.be.exist')
        cy.get(loc.RODAPE).should('be.visible')
        //Clica para visualizar o conteúdo do artigo
        cy.intercept('GET', `https://blogdoagi.com.br/demografia-produtividade-e-o-desafio-do-crescimento-economico-no-brasil/?relatedposts=1`).as('relatedposts')
        cy.get(loc.TITULO_ARTIGO).click()
        cy.wait('@relatedposts')
        //Verifica os dados relacionados ao conteúdo do artigo
        cy.get(loc.IMG_DETALHE_ARTIGO).should('be.visible')
        cy.get(loc.TEXTO_ARTIGO).should('be.visible')
        //Movimenta a barra de rolagem lateral para exibir o rodapé da página
        cy.scrollTo('bottom')
        //Valida a exibição dos links de paginação
        cy.get(loc.NAVEGACAO).should('be.visible')
    })

})
