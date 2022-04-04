
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
        cy.searchResult('No results were found for your search');
    })
    it('search for elements with special code',()=>{
        cy.readFile('cypress/support/text/search.txt').then((text)=>{
            cy.search(text);
        })
        cy.searchResult('No results were found for your search');
    })
})