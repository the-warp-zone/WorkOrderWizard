const router = require('express').Router()
const db = require('../models')

router.get('/', function(req, res) {
    console.log('get route requested.')
    res.send('Get Route Hit').status(200)
})

router.get('/all', function(req, res) {
    console.log('get fetch requested.')
    console.log('get all customers')
    db.Customer.find({}).then(function(customers) {
        // res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
        // res.header(
        //     'Access-Control-Allow-Headers',
        //     'Origin, X-Requested-With, Content-Type, Accept'
        // )
        res.send(customers).status(200)
    })
})

router.get('/*', function(req, res) {
    console.log('requested details of customer ID : ' + req.params[0])
    db.Customer.findById(req.params[0], function(err, customer) {
        if (customer) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            )
            res.send(customer).status(200)
        }
    }).then(function(customer) {
        console.log(customer)
    })
})

router.post('/', function(req, res) {
    let customer = new db.Customer(req.body).save().then(function(customer) {
        res.send(customer).status(200)
    })
})

router.delete('/*', function(req, res) {
    db.Customer.findById(req.params[0], function(err, customer) {
        if (customer) customer.remove()
    }).then(function(customer) {
        res.send(customer).status(200)
    })
})

router.put('/*', function(req, res) {
    console.log('update customer route hit')
    console.log(req.params) //this specifies which customer record we are adding information to
    console.log(req.body) //use this to specify properties and values to add
    db.Customer.update({ _id: req.params[0] }, req.body, function(
        err,
        numAffected
    ) {
        if (err) return console.log(err)
        console.log('numAffected:')
        console.log(numAffected)
    }).then(function(customer) {
        console.log(customer)
        res.send(customer).status(200)
    })
})

module.exports = router
