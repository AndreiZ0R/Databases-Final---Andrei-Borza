export default class AccountModel {

    constructor(nrcont, sold, idpers) {
        this.nrcont = nrcont;
        this.sold = sold;
        this.idpers = idpers;
    }


    static getTableHeaders() {
        return ['Account Number', 'Balance', 'Holder Id'];
    }

    static default() {
        return new AccountModel(0, 0, 0);
    }
};