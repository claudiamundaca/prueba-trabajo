const {Then, When, Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('Acceso a la pagina', () => {
  cy.visit('https://www.automationexercise.com/');

});

Given('Click en boton Login', () => {
  cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').should('be.visible').click();
});

When('Ingreso usuario', () => {
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').should('be.visible').click().type('cmundaca.casanova@gmail.com');
});

When('Ingreso usuario incorrecto', () => {
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').should('be.visible').click().type('error1@gmail.com');
});

When('Ingreso contrasena y doy click en Login', () => {
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').click().type('Pruebatrabajo');
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button').click();
});

When('Ingreso contrasena incorrecta y doy click en Login', () => {
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').click().type('contrasenaincorrecta');
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button').click();
});

Then('Valido logeo exitoso', () => {
  cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a').contains('Logged in as')
});

Then('Valido logeo incorrecto', () => {
  cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p').should('have.text','Your email or password is incorrect!')
});