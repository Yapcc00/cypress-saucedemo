class LoginPage {
    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-button"),
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }

  }
  
  export const loginPage = new LoginPage();