const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    businessName:  String,
	phone: Number,
	email: String,
	firstName:  String,
	lastName:  String,
	nickName:  String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zip: String,
	country: String,
	archived: Boolean,
	deleted: Boolean,
	userID: Schema.Types.ObjectId
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
