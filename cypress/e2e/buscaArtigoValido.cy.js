/// <reference types="cypress" />

import loc from '../support/locators/locators'

describe('Busca determinado artigo válido', () => {
    //Redirecionamento para tela home do blog
    beforeEach(() => {
        cy.visit("https://blogdoagi.com.br/")
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
        cy.get(loc.CAMPO_DE_BUSCA).type('Como fazer PIX?'+'{downarrow}{enter}', { delay: 150 })
        //Verifica a existência de uma nova tela com os resultados da busca efetuada
        cy.get(loc.TEXTO_RESULTADO_BUSCA).should('exist')
        //Valida os dados exibidos e relacionados a busca efetuada
        cy.get(loc.ARTIGO1).should('be.visible')
        cy.get(loc.SUB_TITULO3).should('contain', 'Qual a diferença entre Pix, TED e DOC?')
        cy.get(loc.PAG1).should('contain', '1')
        cy.get(loc.PROXIMO).should('exist')
    })

})
