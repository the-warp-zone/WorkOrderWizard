const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
    paid: Boolean,
    open: Boolean,
    amountBilled: Number,
    dateIssued: Date,
    workOrderID: { type: Schema.Types.ObjectId, ref: 'WorkOrder' },
    title: String,
    notes: String,
    billingAddress: String,
    archived: Boolean,
    deleted: Boolean,
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice
