const mongoose = require('mongoose');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	
	// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/invoiceCentral";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to MongoDB.");
  // we're connected!
});
	
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName:  String,
	lastName:  String,
	nickName:  String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zip: String,
	country: String
});

const Customer = mongoose.model("Customer", customerSchema);

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

app.get("/api/fetch", function(req, res) {
	console.log("get fetch requested.");
	console.log("get all customers");
	Customer.find({}).then( function(customers) {res.send(customers).status(200);});
});

app.delete("/api/customer/*", function(req, res) {
	Customer.findById(req.params[0], function (err, customer) { if(customer) customer.remove();}).then(function (customer){res.send(customer).status(200)});
});

app.post("/api/customer", function(req, res) {
	console.log(req.body);
	let customer = new Customer(req.body).save().then(function(customer){
		res.send(customer).status(200);
	//console.log("create customer route hit");
	
	});
});

app.put("/api/customer/*", function(req, res) {
	console.log("update customer route hit");
	console.log(req.params); //this specifies which customer record we are adding information to
	console.log(req.body); //use this to specify properties and values to add
	Customer.update({_id:req.params[0]}, req.body, function(err, numAffected){
		if (err) return console.log(err);
		console.log("numAffected:");
		console.log(numAffected);
	}).then(function (customer){console.log(customer);res.send(customer).status(200)});
});

};