export class LoginPage {

  async login(emailAddress: string, password: string) {
    cy.get('#email').type(emailAddress)
    cy.get('#password').type(password)
    cy.get('[data-test="login-submit"]').click()
  }
}