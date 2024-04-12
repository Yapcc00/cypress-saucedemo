import { ComprarElements } from "../Elements/comprarArticuloElements";
export class ComprarArticuloSteps {

    static btnAddCart() {
        ComprarElements.buttons.btnAddCart.click();
    }

    static btnGoCart() {
        ComprarElements.buttons.btnGoCart.click();
    }

    static btnChekOut() {
        ComprarElements.buttons.btnCheckOut.click();
    }

    static txtName(name) {
        return ComprarElements.inputText.Name.type(name);
    }
    static txtLastName(lastName) {
        return ComprarElements.inputText.lastName.type(lastName);
    }

    static txtCodePostal(codePostal){
        return ComprarElements.inputText.codePostal.type(codePostal)
    }

    static btnContinue() {
        ComprarElements.buttons.btnContinue.click();
    }
    static btnFinish() {
        ComprarElements.buttons.btnFinish.click();
    }


    static Acceder() {
        this.btnAddCart();
        this.btnGoCart();
        this.btnChekOut();
    }
    static Comprar(name,lastName,codePostal) {
        this.txtName(name);
        this.txtLastName(lastName);
        this.txtCodePostal(codePostal);
    }
    
    static Finalizar() {
        this.btnContinue();
        this.btnFinish();
    }


}

