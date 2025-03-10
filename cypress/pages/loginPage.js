class LoginPage {

    selectorsList() {
        const selector = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selector
    }
     
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    
    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameFilde).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

}

export default LoginPage
