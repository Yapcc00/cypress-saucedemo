class ComprarArticuloPage {
    elements = {
        btnAddCart: () => cy.get("#add-to-cart-sauce-labs-backpack"),
        btnGoCart: () => cy.get(".shopping_cart_link"),
        btnChekout: () => cy.get("#checkout"),
        txtName: () => cy.get("#first-name"),
        txtLastName: () => cy.get("#last-name"),
        txtCodePostal: () => cy.get("#postal-code"),
        btnContinue: () => cy.get("#continue"),
        btnFinish: () => cy.get("#finish"),
    };

    typeBtnAddCart() {
        this.elements.btnAddCart().click();
    }

    typeBtnGoCart() {
        this.elements.btnGoCart().click();
    }

    typeBtnCheckOut() {
        this.elements.btnChekout().click();
    }
    
    typeName(Name) {
        this.elements.txtName().type(Name);
    }

    typeLastName(lastName) {
        this.elements.txtLastName().type(lastName);
    }

    typeCodePostal (codePostal) {
        this.elements.txtCodePostal().type(codePostal);
    }

    
    typeBtnContinue() {
        this.elements.btnContinue().click();
    }
    
    typeBtnFinish() {
        this.elements.btnFinish().click();
    }

}

export const comprarArticuloPage = new ComprarArticuloPage();