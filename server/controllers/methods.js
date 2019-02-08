const db = require('../dbconnection/schema.js'); //accese to your scheema;

exports.addData = (req,res) => {
	db.create(req.body).then(results => res.send(results))
};
exports.getData = (req,res) => {
	db.findOne({_id: req.params.id})
		.then(singleData => res.send(singleData));
};