const express = require('express');
const connection = require('../connection');
const router = express.Router();

//TODO: routes;

router.get('/all', (req, res, next) => {
    const query = 'select * from carduri;';

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    });
});


module.exports = router;
