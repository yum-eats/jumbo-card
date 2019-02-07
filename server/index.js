const express = require('express');
const app = express();
const port = 8080;

const controller = require('./methods.js');
//this gets all data
app.get('/results', controller.getAllData);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))