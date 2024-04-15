@login
Feature: Iniciar session Y comprar un articulo exitosamente

  Scenario: Iniciar Sesion
    Given que el usuario ingresa a la pagina web
    When ingresa las credenciales "standard_user" "secret_sauce"
    Then para comprar un articulo y finalizar la compra "parco1" "Qa" "050001"
  
