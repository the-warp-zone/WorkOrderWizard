const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
	paid: Boolean,
	open: Boolean,
	amountBilled: Number,
	dateIssued: Date,
	workOrderID: Schema.Types.ObjectId
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;

