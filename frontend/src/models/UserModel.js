export default class UserModel {

    constructor(idpers, nume, adresa, gen, data_nasterii, email, data_curenta) {
        this.idpers = idpers;
        this.nume = nume;
        this.adresa = adresa;
        this.gen = gen;
        this.data_nasterii = data_nasterii;
        this.email = email;
        this.data_curenta = data_curenta;
    }

    static default() {
        return new UserModel
            (1, 'Unknown', 'Unknown', 'X', '1970-01-01T', 'invalid', '-');
    }

    static getTableHeaders() {
        return ['#', 'Name', 'Address', 'Gender', 'Birthdate', 'Email'];
    }

};
