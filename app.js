var express = require('express');
var config = require('./config');

var app = express();

app.listen(config.port, function() {
    console.log(`App is listening at port ${config.port}`);
});

// Get budget by budgetId
app.get('/budget/:budgetId', function(req, res) {

    var data = {
        id: 1,
        name: 'Personal',
        lineItems: [
            {
                id: 1,
                name: 'Pay Check',
                type: 1,
                amount: 2750.00,
                recurring: true,
                term: 'Monthly'
            },
            {
                id: 2,
                name: 'Rent',
                type: -1,
                amount: 1400.00,
                recurring: true,
                term: 'Monthly'
            },
            {
                id: 2,
                name: 'Groceries',
                type: -1,
                amount: 100.00,
                recurring: true,
                term: 'Weekly'
            },
            {
                id: 2,
                name: 'Christmas Gifts',
                type: -1,
                amount: 250.00,
                recurring: false
            }
        ]
    };

    res.json(data);

});

// Get all budgets for a userId
app.get('/budgets/:userId', function(req, res) {

    var data = [];

    res.json(data);

});

// Get user by userId
app.get('/user/:userId', function(req, res) {

    var data = {};

    res.json(data);

});
