const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workOrderSchema = new Schema({
    createdOn: { type: Date, default: Date.now },
    dateDue: Date,
    hoursLogged: Number,
    title: String,
    notes: String,
    archived: Boolean,
    deleted: Boolean,
    customerID: { type: Schema.Types.ObjectId, ref: 'customer' },
})

const WorkOrder = mongoose.model('WorkOrder', workOrderSchema)

module.exports = WorkOrder
