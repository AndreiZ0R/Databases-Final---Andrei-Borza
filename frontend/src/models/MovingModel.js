export default class MovingModel {

    constructor(nrcard, data_ora, valoare, scop) {
        this.nrcard = nrcard;
        this.data_ora = data_ora;
        this.valoare = valoare;
        this.scop = scop;
    }

    static default() {
        return new MovingModel(0, '-', '0', 'x');
    }

    static getTableHeaders() {
        return ['Card #', 'Date', 'Amount', 'Purpose'];
    }

}