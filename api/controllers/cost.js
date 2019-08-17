const router = require('express').Router()
const db = require('../models')

router.get('/all/:apisecret', function(req, res) {
    console.log('get fetch requested.')
    console.log('get all costs')
	console.log(req.params.apisecret);
	console.log(process.env.API_SECRET);
	if (req.params.apisecret === process.env.API_SECRET) {
		db.Cost.find({}).then(function(costs) {
			res.send(costs).status(200)
		})	
	} else res.send("invalid").status(400);
	
    
})

router.get('/:apisecret/:costid', function(req, res) {
    console.log('requested details of cost ID : ' + req.params.costid)
	console.log('used API Secret : ' + req.params.apisecret)
    if (req.params.apisecret === process.env.API_SECRET) {
		db.Cost.findById(req.params.costid, function(err, cost) {
			res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept'
			)
			if (cost) res.send(cost).status(200)
		}).then(function(cost) {
			console.log(cost)
		})
	} else res.send("invalid").status(400);
})

router.post('/:apisecret', function(req, res) {
	console.log("apisecret:\t" + req.params.apisecret);
    let cost = new db.Cost(req.body).save().then(function(cost) {
        res.send(cost).status(200)
    })
})

/*
router.delete('/*', function(req, res) {
    db.Cost.findById(req.params[0], function(err, cost) {
        if (cost) cost.remove()
    }).then(function(cost) {
        res.send(cost).status(200)
    })
})
*/

router.delete('/*', function(req, res) {
	
	    db.Cost.update({ _id: req.params[0] }, {"deleted":true}, function(err, numAffected) {
        if (err) return console.log(err);
        console.log('numAffected:');
        console.log(numAffected);
    }).then(function(cost) {
        console.log(cost)
        res.send(cost).status(200)
    });
})

router.put('/*', function(req, res) {
    console.log('update cost route hit')
    console.log(req.params) //this specifies which cost record we are adding information to
    console.log(req.body) //use this to specify properties and values to add
    db.Cost.update({ _id: req.params[0] }, req.body, function(
        err,
        numAffected
    ) {
        if (err) return console.log(err)
        console.log('numAffected:')
        console.log(numAffected)
    }).then(function(cost) {
        console.log(cost)
        res.send(cost).status(200)
    })
})

module.exports = router
