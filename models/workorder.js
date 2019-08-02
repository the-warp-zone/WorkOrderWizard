const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const workOrderSchema = new Schema({
	customerID: String,
	createdOn: Date,
	dateDue: Date,
	hoursLogged: Number
});

const WorkOrder = mongoose.model("WorkOrder", workOrderSchema);

module.exports = WorkOrder;
