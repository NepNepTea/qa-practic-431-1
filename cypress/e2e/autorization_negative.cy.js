describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')
    cy.contains('Авторизация').click()
    cy.url().should('include', '/login')

    cy.get('input').eq(0).type('логин')
    cy.get('input[type*="password"]').type('password')

    cy.contains('Войти').click()
    cy.url().should('include', '/login')
  })
})