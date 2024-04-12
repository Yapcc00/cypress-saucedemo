# Cypress + Cucumber + POM para Sauce Demo

Este proyecto contiene pruebas automatizadas para el sitio web Sauce Demo utilizando Cypress, Cucumber y el patrón Page Object Model. Las pruebas automatizadas incluyen iniciar sesión, agregar un artículo al carrito y realizar una compra.

## Tecnologías Utilizadas

- **Cypress**: Framework de pruebas E2E.
- **Cucumber**: Herramienta que soporta BDD (Behaviour-Driven Development).
- **Page Object Model**: Patrón de diseño que mejora el mantenimiento de las pruebas y reduce la duplicación de código.
- **Allure Reports**: Sistema de reporte que proporciona un resumen visual claro de las pruebas ejecutadas.

## Requisitos

Para ejecutar este proyecto, necesitarás tener Node.js instalado en tu sistema. Puedes descargarlo desde [Node.js official website](https://nodejs.org/).

## Configuración del Proyecto

Para configurar el proyecto y comenzar a correr las pruebas, sigue los siguientes pasos:


Instala las dependencias:
    ```
    npm install
    ```

Ejecuta las pruebas:
    ```
    npx cypress run
    ```

## Estructura del Proyecto

La estructura de carpetas del proyecto está diseñada para una organización clara y efectiva:

- `/cypress`: Contiene todas las pruebas y configuraciones de Cypress.
  - `/e2e`: Directorio principal para las pruebas end-to-end.
    - `/Elements`: Almacena los selectores específicos de elementos utilizados en las pruebas.
    - `/features`: Archivos `.feature` que describen las pruebas en un formato legible.
    - `/pages`: Modelos de página para aplicar el patrón Page Object Model.
    - `/step_definitions`: Definiciones de pasos para Cucumber correspondientes a cada característica.
  - `/fixtures`: Datos estáticos que pueden ser utilizados durante las pruebas.
  - `/screenshots`: Capturas de pantalla que se almacenan automáticamente cuando las pruebas fallan.
  - `/support`: Contiene archivos de soporte, como comandos personalizados o configuraciones generales de Cypress.


## Generación de Reportes

Para generar y visualizar los reportes de Allure, ejecuta los siguientes comandos después de completar las pruebas:

```
allure generate --clean
allure open
