const db = require('./dbConnection.js');

exports.getAllData = (req, res) => {
	let schema = `Select * from `;
	db.query(schema, function (error, results) {
		if(error) {
			res.status('505').send(error);
		}else {
			res.send(results);
		}
	});
};