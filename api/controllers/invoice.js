const router = require('express').Router()
const db = require('../models')

router.get('/', function(req, res) {
    console.log('get route requested.')
    res.send('Get Route Hit').status(200)
})

router.get('/all', function(req, res) {
    console.log('get fetch requested.')
    console.log('get all invoices')
    db.Invoice.find({}).then(function(invoices) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
        res.send(invoices).status(200)
    })
})

router.get('/*', function(req, res) {
    console.log('requested details of invoice ID : ' + req.params[0])
    db.Invoice.findById(req.params[0], function(err, invoice) {
        if (invoice) res.send(invoice).status(200)
    }).then(function(invoice) {
        console.log(invoice)
    })
})

router.post('/', function(req, res) {
    let invoice = new db.Invoice(req.body).save().then(function(invoice) {
        res.send(invoice).status(200)
    })
})

router.delete('/*', function(req, res) {
    db.Invoice.findById(req.params[0], function(err, invoice) {
        if (invoice) invoice.remove()
    }).then(function(invoice) {
        res.send(invoice).status(200)
    })
})

router.put('/*', function(req, res) {
    console.log('update invoice route hit')
    console.log(req.params) //this specifies which invoice record we are adding information to
    console.log(req.body) //use this to specify properties and values to add
    db.Invoice.update({ _id: req.params[0] }, req.body, function(
        err,
        numAffected
    ) {
        if (err) return console.log(err)
        console.log('numAffected:')
        console.log(numAffected)
    }).then(function(invoice) {
        console.log(invoice)
        res.send(invoice).status(200)
    })
})

module.exports = router
