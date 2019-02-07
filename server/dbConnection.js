const mysql      = require('mysql');
const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'yum_eats'
});

module.exports.db = db;