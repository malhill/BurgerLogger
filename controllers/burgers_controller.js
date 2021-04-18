const express = require('express');
const router = express.Router();
const burger = require('./models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll( (data) => {
        let burgerObject = {
            burgers: data
        };

        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', (req, res) => {
    let burgerName = req.body.burger_name;
    burger.insert('burgerName', burgerName, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put ('/api/burgers/:id', (req, res) => {
    let selectID = 'id = ' + req.params.id;

    burger.updateOne(req.params.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;