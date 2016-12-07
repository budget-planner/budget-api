var express = require('express');
var config = require('./config');

var app = express();

app.listen(config.port, function() {
    console.log(`App is listening at port ${config.port}`);
});

// Get budget by budgetId
app.get('/budget/:budgetId', function(req, res) {

    var data = {};

    res.json(data);

});

// Get all budgets for a userId
app.get('/budget/:userId', function(req, res) {

    var data = {};

    res.json(data);

});

// Get user by userId
app.get('/user/:userId', function(req, res) {

    var data = {};

    res.json(data);

});
