const router = require('express').Router()
const db = require('../models')

router.get('/', function(req, res) {
    console.log('Customer GET route requested.')
    res.send('Customer GET route').status(200)
})

router.get('/all', function(req, res) {
    console.log('get fetch requested.')
    console.log('get all workorders')
    db.WorkOrder.find({}).then(function(workorders) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
        res.send(workorders).status(200)
    })
})

router.get('/*', function(req, res) {
    console.log('requested details of workorder ID : ' + req.params[0])
    db.WorkOrder.findById(req.params[0], function(err, workorder) {
        if (err) {
            console.log('\nerror:\n')
            res.send(err).status(400)
            return console.log(err)
        } // we need to actually handle the error appropriately.
        else if (typeof workorder !== 'undefined' && workorder !== null)
            res.send(workorder).status(200)
        else if (workorder === null) {
            db.Customer.findById(req.params[0], function(err, customer) {
                if (err) return console.log(err)
                else if (customer) {
                    db.WorkOrder.find({ customerID: customer }).then(function(
                        workorders
                    ) {
                        res.send(workorders).status(200)
                    })
                }
            })
        }
    }).catch(function(err) {
        console.log(err)
    })
})

router.post('/', function(req, res) {
    let workorder = new db.WorkOrder(req.body).save().then(function(workorder) {
        res.send(workorder).status(200)
    })
})

router.delete('/*', function(req, res) {
    db.WorkOrder.findById(req.params[0], function(err, workorder) {
        if (workorder) workorder.remove()
    }).then(function(workorder) {
        res.send(workorder).status(200)
    })
})

router.put('/*', function(req, res) {
    console.log('update workorder route hit')
    console.log(req.params) //this specifies which workorder record we are adding information to
    console.log(req.body) //use this to specify properties and values to add
    db.WorkOrder.update({ _id: req.params[0] }, req.body, function(
        err,
        numAffected
    ) {
        if (err) return console.log(err)
        console.log('numAffected:')
        console.log(numAffected)
    }).then(function(workorder) {
        console.log(workorder)
        res.send(workorder).status(200)
    })
})

module.exports = router
