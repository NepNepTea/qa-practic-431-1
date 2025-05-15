describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')
    cy.contains('Регистрация').click()
    cy.url().should('include', '/registration')

    cy.get('input[placeholder*="Латинские символы"]').type('logintest')
    cy.get('input[type*="email"]').type('test@test.ru')
    cy.get('input[type*="password"]').eq(0).type('Test98')
    cy.get('input[type*="password"]').eq(1).type('Test98')
    cy.contains('Далее').click()

    cy.get('input[placeholder*="Иван"]').eq(0).type('Револьвер')
    cy.get('input[placeholder*="Иван"]').eq(1).type('Оцелот')
    cy.contains('Создать аккаунт').click()

    cy.url().should('include', '/account/main')
  })
})