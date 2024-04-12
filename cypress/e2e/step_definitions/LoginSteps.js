import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../pages/LoginPage';
import { comprarArticuloPage } from '../pages/comprarArticuloPage';

Given('que el usuario ingresa a la pagina web', () => {
  cy.visit("/");
});

When('ingresa las credenciales {string} {string}', (username, password, ) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickLogin();
  cy.get('.title').should('have.text', 'Products');
  cy.screenshot();
});

Then('para comprar un articulo y finalizar la compra {string} {string} {string}', (Name, lastName, codePostal) => {
  comprarArticuloPage.typeBtnAddCart();
  cy.scrollTo('top');
  cy.wait(1000);
  comprarArticuloPage.typeBtnGoCart();
  comprarArticuloPage.typeBtnCheckOut();
  comprarArticuloPage.typeName(Name);
  comprarArticuloPage.typeLastName(lastName);
  comprarArticuloPage.typeCodePostal(codePostal);
  comprarArticuloPage.typeBtnContinue();
  comprarArticuloPage.typeBtnFinish();
  cy.get(".complete-header").should("have.text", 'Thank you for your order!');
  cy.screenshot();
});
