const mongoose = require('mongoose');
const mongouri = 'mongodb://localhost:27017/yum_eats'; // create schema before running

const db = mongoose.connect(mongouri,{
	useNewUrlParser : true
});

db
	.then(() => console.log(`connected to database ${mongouri}`))
	.catch((err) => console.log(err));

module.exports = db; // connection that will be passed down on your schemea.js