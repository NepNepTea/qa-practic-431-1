describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')
    cy.contains('Регистрация').click()
    cy.url().should('include', '/registration')
    cy.get('input[placeholder*="Латинские символы"]').type('Габриель')
    cy.get('input[type*="email"]').type('notEmail')
    cy.get('input[type*="password"]').eq(0).type('password')
    cy.get('input[type*="password"]').eq(1).type('password')
    cy.contains('Далее').should('be.disabled')
  })
})