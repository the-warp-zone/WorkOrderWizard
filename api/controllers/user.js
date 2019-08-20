const router = require('express').Router()
const db = require('../models')

router.get('/*', function(req, res) { // this route requires a correct hashedpassword value to be served, and a valid user id
    console.log('requested details of user ID : ' + req.params[0])
    db.User.findById(req.params[0], function(err, user) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
        if (user) res.send(user).status(200)
    }).then(function(user) {
        console.log(user)
    })
})

router.post('/', function(req, res) { // this route creates a user, and it requires a valid admin passcode (environment variable secret)
    let user = new db.User(req.body).save().then(function(user) {
        res.send(user).status(200)
    })
})

router.put('/*', function(req, res) { // this route creates a user, and it requires a valid admin passcode (environment variable secret), plus a valid userID, plus a valid passwordhash.
    console.log('update user route hit') //note: you can use this to set the current session token, which will be used to secure the routes. userID plus session token must be passed to other routes
    console.log(req.params) //this specifies which user record we are adding information to
    console.log(req.body) //use this to specify properties and values to add
    db.User.update({ _id: req.params[0] }, req.body, function(
        err,
        numAffected
    ) {
        if (err) return console.log(err)
        console.log('numAffected:')
        console.log(numAffected)
    }).then(function(user) {
        console.log(user)
        res.send(user).status(200)
    })
})

module.exports = router
