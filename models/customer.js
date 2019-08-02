const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName:  String,
	lastName:  String,
	nickName:  String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zip: String,
	country: String
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
