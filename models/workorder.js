const mongoose = require('mongoose');
	
const Schema = mongoose.Schema;

const workOrderSchema = new Schema({
	createdOn: Date,
	dateDue: Date,
	hoursLogged: Number,
	customerID: Schema.Types.ObjectId
});

const WorkOrder = mongoose.model("WorkOrder", workOrderSchema);

module.exports = WorkOrder;
