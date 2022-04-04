//const { it } = require("mocha");

describe('Search elements', () =>{
    beforeEach(() =>{
        cy.visit('/')
    })

    it('search for elements with multiple results', () =>{
        cy.search('dress');// Podemos llamar a comandos del archivo commands ejemplo
        cy.fixture('searchResult').then((searchResult) =>{
            cy.get(searchResult.title).should('contain', 'dress'); //debe contener la palabra dress
        })
    })
    it("search for elements with no results", () =>{
        cy.search('qwerty');
        cy.fixture('searchResult').then((searchResult) =>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search'); //debe contener la palabra dress
        })
    })
})