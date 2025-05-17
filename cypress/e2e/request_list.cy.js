describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')
    cy.contains('Авторизация').click()
    cy.url().should('include', '/login')

    cy.get('input').eq(0).type('seade')
    cy.get('input[type*="password"]').type('Jelly02')

    cy.contains('Войти').click()
    cy.url().should('include', '/account/main')

    cy.contains('Заявки').click()
    cy.url().should('include', '/account/requests')
  })
})