export class HomePage {
  readonly path: string

  constructor() {
    this.path = '/'
  }

  async open() {
    cy.visit(this.path)
  }

  async clickSignIn() {
    cy.get('[data-test="nav-sign-in"]').click()
    cy.get('h3').contains('Login').should('be.visible')
  }
}