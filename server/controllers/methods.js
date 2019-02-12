const db = require('../dbconnection/schema.js'); //accese to your scheema;

exports.addData = (req,res) => {
	db.create(req.body).catch((err) => res.send(err))
};
exports.getData = (req,res) => {
	db.findOne({restaurant_id: req.params.id})
		.then(singleData => res.send(singleData))
		.catch(err => res.send(err));
};