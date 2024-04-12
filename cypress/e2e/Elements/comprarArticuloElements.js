export class ComprarElements  {
    static get inputText(){
        return{
            get Name(){
                return cy.get("#first-name")
            },
            get lastName(){
                return cy.get("#last-name")
            },
            get codePostal(){
                return cy.get("#postal-code")
            },
        };

    };

    static get buttons(){
        return{
            get btnAddCart(){
                return cy.get("#add-to-cart-sauce-labs-backpack")
            },
            get btnGoCart(){
                return cy.get(".shopping_cart_link")
            },
            get btnCheckOut(){
                return cy.get("#checkout")
            },
            get btnContinue(){
                return cy.get("#continue")
            },
            get btnFinish(){
                return cy.get("#finish")
            },
        }
    }


};
