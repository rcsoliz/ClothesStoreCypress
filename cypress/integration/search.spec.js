//const { it } = require("mocha");

describe('Search elements', () =>{
    beforeEach(() =>{
        cy.visit('/')
    })

    it('search for elements with multiple results', () =>{
        cy.fixture('index').then((index) =>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
            cy.wait(4000);
        }) 
        cy.fixture('searchResult').then((searchResult) =>{
            cy.get(searchResult.title).should('contain', 'dress'); //debe contener la palabra dress
        })
    })
    it("search for elements with no results", () =>{
        cy.fixture('index').then((index) =>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
            cy.wait(4000);
        }) 
        cy.fixture('searchResult').then((searchResult) =>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search'); //debe contener la palabra dress
        })
    })
})