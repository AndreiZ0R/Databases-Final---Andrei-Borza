const persons = require('./persoane');
const accounts = require('./conturi');
const cards = require('./carduri');
const moves = require('./miscari');
const queries = require('./queries');

const Routes = {
    persoane: persons,
    conturi: accounts,
    carduri: cards,
    miscari: moves,
    queries: queries
};

module.exports = Routes;