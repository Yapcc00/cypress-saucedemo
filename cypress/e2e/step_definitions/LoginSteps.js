import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../pages/LoginPage';
import { ComprarArticuloSteps } from '../pages/comprarArticuloPage';

Given('que el usuario ingresa a la pagina web', () => {
  cy.visit("/");
});

When('ingresa las credenciales {string} {string}', (username, password,) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickLogin();
  cy.get('.title').should('have.text', 'Products');
  cy.screenshot();
});

Then('para comprar un articulo y finalizar la compra {string} {string} {string}', (name, lastName, codePostal) => {
  ComprarArticuloSteps.Acceder();
  cy.wait(1000);
  ComprarArticuloSteps.Comprar(name, lastName, codePostal);
  ComprarArticuloSteps.Finalizar();
  cy.screenshot();
});
