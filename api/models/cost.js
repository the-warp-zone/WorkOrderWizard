const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const costSchema = new Schema({
	costName: String,
	vendorReceiptSN: String,
	vendor: String,
	datePurchased: Date,
	amount: Number,
	archived: Boolean,
	deleted: Boolean,
	workOrderID: Schema.Types.ObjectId
});

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost;

