const express = require('express');
const connection = require('../connection');
const router = express.Router();


router.get('/3-a', (req, res, next) => {
    const query = "SELECT * FROM Carduri \
    WHERE categorie = 'DEBIT' \
    ORDER BY data_de_la DESC";

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

router.get('/3-b', (req, res, next) => {
    const query = 'CALL between_vals(500, 1000)';

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results[0]);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

router.get('/4-a', (req, res, next) => {
    const query = "SELECT p.nume, Carduri.tip, Carduri.categorie, Carduri.data_de_la, Carduri.data_la \
     FROM Persoane p \
INNER JOIN Conturi ON p.idpers = Conturi.idpers \
INNER JOIN Carduri ON Conturi.nrcont = Carduri.nrcont \
WHERE Carduri.tip = 'MASTERCARD'";

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});


router.get('/4-b', (req, res, next) => {
    const query = 'SELECT DISTINCT p.nume, c1.nrcont as cont1, c2.nrcont as cont2 \
FROM Persoane p \
INNER JOIN Conturi c1 ON p.idpers = c1.idpers \
INNER JOIN Conturi c2 ON c1.idpers = c2.idpers \
INNER JOIN Carduri cd ON c1.nrcont = cd.nrcont OR c2.nrcont = cd.nrcont \
WHERE c1.nrcont < c2.nrcont';

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

router.get('/5-a', (req, res, next) => {
    const query = "SELECT p.idpers, p.nume, cd.nrcard \
FROM Persoane p \
INNER JOIN Conturi c ON p.idpers = c.idpers \
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont \
GROUP BY p.idpers \
HAVING COUNT(cd.nrcard) = 1; ";

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

router.get('/5-b', (req, res, next) => {
    const query = "CALL scop_fiveb(102301)";

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results[0]);
        }
        else {
            return res.status(500).json(err);
        }
    })
});


router.get('/6-a', (req, res, next) => {
    const query = "SELECT p.gen, cd.categorie, COUNT(*) AS 'count' \
FROM Persoane p \
INNER JOIN Conturi c ON p.idpers = c.idpers \
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont \
GROUP BY p.gen, cd.categorie";

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

router.get('/6-b', (req, res, next) => {
    const query = "SELECT p.nume, c.nrcont, SUM(m.valoare) AS 'total', \
    MIN(m.valoare) as 'min', AVG(m.valoare) as 'avg', MAX(m.valoare) as 'max' \
FROM Persoane p \
INNER JOIN Conturi c ON p.idpers = c.idpers \
INNER JOIN Carduri cd ON c.nrcont = cd.nrcont \
INNER JOIN Miscari m ON cd.nrcard = m.nrcard \
WHERE YEAR(m.data_ora) BETWEEN 2021 AND 2022 AND YEAR(p.data_nasterii) = 1998 \
GROUP BY p.idpers, c.nrcont";

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

module.exports = router;