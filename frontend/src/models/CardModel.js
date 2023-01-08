export default class CardModel {

    constructor(nrcard, data_de_la, data_la, limita, nrcont, tip, categorie) {
        this.nrcard = nrcard;
        this.data_de_la = data_de_la;
        this.data_la = data_la;
        this.limita = limita;
        this.nrcont = nrcont;
        this.tip = tip;
        this.categorie = categorie;
    }

    static default() {
        return new CardModel('000', '-', '-', '-', '-', 'x', 'x');
    }

    static getTableHeaders() {
        return ['Card #', 'Creat. Date', 'Exp. Date', 'Card Limit', 'Account #', 'Type', 'Category'];
    }
};