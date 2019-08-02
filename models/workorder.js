const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
	paid: Boolean,
	open: Boolean,
	amountBilled: Number,
	dateIssued: Date
});

const costSchema = new Schema({
	vendorReceiptSN: String,
	vendor: String,
	datePurchased: Date,
	amount: Number
});

const workOrderSchema = new Schema({
	customerID: String,
	createdOn: Date,
	dateDue: Date,
	hoursLogged: Number,
	costs: {
    type: [costSchema],
    default: undefined
	},
	invoices: {
    type: [invoiceSchema],
    default: undefined
	}
});

const WorkOrder = mongoose.model("WorkOrder", workOrderSchema);

module.exports = WorkOrder;
