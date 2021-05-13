const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/testing", (req, res) => {
    // res.send('test is good')
    burger.selectAll((data) => {
    res.send('test is good')
})
});

router.get('/', (req, res) => {
    burger.selectAll( (data) => {
        let burgerObject = {
            burgers: data
        };

        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne('burgerName', req.body.burgerName, (result) => {
        console.log(result);
        res.json({ id: 'well get there!!!' });
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