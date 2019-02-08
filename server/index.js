const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 8080; //note...somes you should use diffrent ports

const controllers = require('./controllers/methods.js'); //this has you get access to getAllData

//this will help make the data readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//setup the static for the path of /public
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/id', controllers.addData);
//will talk to controllers that will talk to database to post data
app.get('/:id/details', controllers.getData);


//listener so we can have our server run on the browser
app.listen(port, () => console.log(`Example app listening on port ${port}!`));