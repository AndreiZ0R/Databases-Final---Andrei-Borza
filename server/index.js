const express = require('express');
const connection = require('./connection');
const Routes = require("./routes/routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/persoane', Routes.persoane);
app.use('/conturi', Routes.conturi);
app.use('/carduri', Routes.carduri);
app.use('/miscari', Routes.miscari);
app.use('/query', Routes.queries);

module.exports = app;