//const mongoose = require('mongoose');
const router = require('express').Router();
const Customer = require('../models');

// ===============================================================================
// ROUTING
// ===============================================================================

router.get("/", function(req, res) {
	console.log("get route requested.");
	res.send("Get Route Hit").status(200);
});


//module.exports = function(app) {
	

/*
let cust = new Customer({
	firstName:  "Bob",
	lastName: "Barker",
	nickName:  "",
	address1: "123 Dogwood Rd.",
	address2: "Unit 123",
	city: "Fakewood",
	state: "FK",
	zip: "99877",
	country: "US"
});
cust.save();
*/


router.get("/fetch", function(req, res) {
	console.log("get fetch requested.");
	console.log("get all customers");
	//console.log(req);
	
	
	Customer.find({}).then( function(customers) {res.send(customers).status(200);});
});


module.exports = router;

/*
app.delete("/customer/*", function(req, res) {
	Customer.findById(req.params[0], function (err, customer) { if(customer) customer.remove();}).then(function (customer){res.send(customer).status(200)});
});


app.post("/customer", function(req, res) {
	console.log(req.body);
	let customer = new Customer(req.body).save().then(function(customer){
		res.send(customer).status(200);
	//console.log("create customer route hit");
	
	});
});

app.put("/customer/*", function(req, res) {
	console.log("update customer route hit");
	console.log(req.params); //this specifies which customer record we are adding information to
	console.log(req.body); //use this to specify properties and values to add
	Customer.update({_id:req.params[0]}, req.body, function(err, numAffected){
		if (err) return console.log(err);
		console.log("numAffected:");
		console.log(numAffected);
	}).then(function (customer){console.log(customer);res.send(customer).status(200)});
});
*/
