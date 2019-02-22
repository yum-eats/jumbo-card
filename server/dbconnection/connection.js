const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://root:root@jumbo-card-f8gcv.mongodb.net/test?retryWrites=true'; // create schema before running

const db = mongoose.connect(mongouri,{
	useNewUrlParser : true
});

db
	.then(() => console.log(`connected to database ${mongouri}`))
	.catch((err) => console.log(err));

module.exports = db; // connection that will be passed down on your schemea.js