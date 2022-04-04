
describe('Login', ()=>{
    beforeEach( () =>{
        cy.visit('/');
    })
    it('Login with incorrect email', ()=>{
        cy.login('pepe456789', '123456789')
        cy.fixture('login').then( (login) =>{
            cy.get(login.incorrectLoginBanner).should('contain', 'Invalid email');
        })
    })
} )