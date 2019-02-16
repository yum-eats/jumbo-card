const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./connection.js');

mongoose.Promise = global.Promise;

var details = new Schema({
	restaurant_id : Number,
	name: String,
	phone: String,
	claimed: Boolean,
	price_level: String,
	review_count: Number,
	star_rating : Number,
	address: String,
	city: String,
	zip_code: Number,
	country: String,
	state: String,
	coordinates: {
		latitude: Number,
		longitude: Number
	},
	category: [{type: String}],
	url: String,
	email: String
});

var Details = mongoose.model('Details', details);

module.exports = Details; //this will be use in methods/controllers
