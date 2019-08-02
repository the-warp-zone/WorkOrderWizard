const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const costSchema = new Schema({
	vendorReceiptSN: String,
	vendor: String,
	datePurchased: Date,
	amount: Number
});

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost;

