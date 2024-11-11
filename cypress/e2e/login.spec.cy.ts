import { HomePage } from "cypress/pages/homePage"
import { LoginPage } from "cypress/pages/loginPage"

const homePage = new HomePage()
const loginPage = new LoginPage()

describe('Login Test', () => {
  it('allows valid admin user to login', () => {
    homePage.open()
    homePage.clickSignIn()
    loginPage.login('admin@practicesoftwaretesting.com', 'welcome01')
  })
})