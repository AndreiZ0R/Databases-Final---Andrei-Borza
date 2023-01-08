const express = require('express');
const connection = require('../connection');
const router = express.Router();

//TODO: routes


// router.post('/create', (req, res, next) => {
//     let product = req.body;
//     const query = 'insert into product (name, description, price) values (?, ?, ?)';

//     connection.query(query, [product.name, product.description, product.price], (err, results) => {
//         if (!err) {
//             return res.status(200).json({ message: "Product inserted successfully" });
//         }
//         else {
//             return res.status(500).json(err);
//         }
//     });
// });

router.get('/all', (req, res, next) => {
    const query = 'select * from persoane';

    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});

// router.patch('/update/:id', (req, res, next) => {
//     const id = req.params.id;
//     let product = req.body;
//     const query = 'update product set name = ?, description = ?, price = ? WHERE id = ?';

//     connection.query(query, [product.name, product.description, product.price, id], (err, results) => {
//         if (!err) {
//             if (!results.affectedRows) {
//                 return res.status(404).json({ message: `Product with id ${id} not found.` });
//             }
//             return res.status(200).json({ message: `Product with id ${id} updated successfully.` });
//         }
//         else {
//             return res.status(500).json(err);
//         }
//     });
// });

// router.delete('/delete/:id', (req, res, next) => {
//     const id = req.params.id;
//     const query = 'DELETE from product WHERE id = ?';

//     connection.query(query, [id], (err, results) => {
//         if (!err) {
//             if (!results.affectedRows) {
//                 return res.status(404).json({ message: `Product with id ${id} not found.` });
//             }
//             return res.status(200).json({ message: `Product with id ${id} deleted successfully.` });
//         }
//         else {
//             return res.status(500).json(err);
//         }
//     });
// });

module.exports = router;