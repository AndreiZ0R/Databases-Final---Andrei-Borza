export default class QueryModel {

    static getHeaders(str) {
        switch (str) {
            case '3-a': return ['Card #', 'Creat. Date', 'Exp. Date', 'Card Limit', 'Account #', 'Type', 'Category'];
            case '3-b': return ['Card #', 'Date', 'Amount', 'Purpose'];

            case '4-a': return ['Name', 'Type', 'Category', 'Creat. Date', 'Exp. Date'];
            case '4-b': return ['Nume', 'First Acc.', 'Second Acc.'];

            case '5-a': return ['#', 'Name', 'Card #'];
            case '5-b': return ['Card #', 'Date', 'Amount', 'Purpose'];

            case '6-a': return ['Gender', 'Category', 'Number Of Cards'];
            case '6-b': return ['Name', 'Account #', 'Total Spent', 'Minimum', 'Average', 'Maximum'];


            default: return ['-', '-'];
        }
    }

    static getFooter(str) {
        switch (str) {
            case '3-a': return 'details for "DEBIT" cards, ordered by expiration date.';
            case '3-b': return 'details for movings with amount between "500" and "1000", ordered ascending by purpose and descending by amount. ';

            case '4-a': return '"MASTERCARD" card holders.';
            case '4-b': return 'account pairs within the same holder, each account having at least one card attached to it.';

            case '5-a': return 'holders with only one card.';
            case '5-b': return 'movings with the same purpose as movings of card "102301" between 17:00 and 19:00, on January 1st, 2022. ';

            case '6-a': return 'for each gender, how many cards of each category there are.';
            case '6-b': return 'minimum, average and maximum amount spent among all cards, between 2021 and 2022.';

            default: return '';
        }
    }
}