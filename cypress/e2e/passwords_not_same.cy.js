describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')
    cy.contains('Регистрация').click()
    cy.url().should('include', '/registration')

    cy.get('input[placeholder*="Латинские символы"]').type('passwordtest')
    cy.get('input[type*="email"]').type('test@test.com')
    cy.get('input[type*="password"]').eq(0).type('Test98')
    cy.get('input[type*="password"]').eq(1).type('Test89')
    cy.contains('Далее').should('be.disabled')
  })
})