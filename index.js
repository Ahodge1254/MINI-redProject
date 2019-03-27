require('dotenv').config();
var express = require('express');
var app = express();
var games = require('./controllers/gamesController');
var seq = require('./db');
var bodyParser = require('body-parser');


seq.sync();
app.use(require('./middleware/headers'));
app.use(bodyParser.json());

app.use('/gamestuff', games);

app.listen(5050, function() {
    console.log(`App is listening on 5050`);
})