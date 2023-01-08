export default class Formatter {

    static getMonthSpelled(month) {
        switch (month) {
            case '01': return 'Jan';
            case '02': return 'Feb';
            case '03': return 'Mar';
            case '04': return 'Apr';
            case '05': return 'May';
            case '06': return 'Jun';
            case '07': return 'Jul';
            case '08': return 'Aug';
            case '09': return 'Sep';
            case '10': return 'Oct';
            case '11': return 'Nov';
            case '12': return 'Dec';

            default: return '???';
        }
    }

    static getFormattedDate(str) {
        const arr = str.split(/[- : T]/);

        let days = parseInt(arr[2]) + 1;
        if (days < 10) {
            days = '0' + days.toString();
        }

        return `${days}-${this.getMonthSpelled(arr[1])}-${arr[0]}`;
    }


    static getFormattedBalance(balance) {
        return '$ ' + parseFloat(balance).toLocaleString('ro-RO');
    }

    static getFormattedDatetime(str) {
        const arr = str.split(/[- : T]/);

        let days = parseInt(arr[2]);
        if (days < 10) {
            days = '0' + days.toString();
        }

        return `${days}-${this.getMonthSpelled(arr[1])}-${arr[0]}, ${parseInt(arr[3]) + 2}:${arr[4]}`;
    }
};