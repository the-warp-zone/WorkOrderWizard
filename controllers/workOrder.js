const router = require('express').Router();
const WorkOrder = require('../models/workorder.js');

router.get("/", function(req, res) {
	console.log("get route requested.");
	res.send("Get Route Hit").status(200);
});

router.get("/all", function(req, res) {
	console.log("get fetch requested.");
	console.log("get all workorders");
	WorkOrder.find({}).then( function(workorders) {res.send(workorders).status(200);});
});

router.get("/*", function(req, res) {
	console.log("requested details of workorder ID : " + req.params[0]);
	WorkOrder.findById(req.params[0], function (err, workorder) {
		if(workorder) res.send(workorder).status(200);})
		.then(function (workorder){
			console.log(workorder);});
});

router.post("/", function(req, res) {
	
	let workorder = new WorkOrder(req.body).save().then(function(workorder){
		res.send(workorder).status(200);
	});
});

router.delete("/*", function(req, res) {
	WorkOrder.findById(req.params[0], function (err, workorder) { if(workorder) workorder.remove();}).then(function (workorder){res.send(workorder).status(200)});
});

router.put("/*", function(req, res) {
	console.log("update workorder route hit");
	console.log(req.params); //this specifies which workorder record we are adding information to
	console.log(req.body); //use this to specify properties and values to add
	WorkOrder.update({_id:req.params[0]}, req.body, function(err, numAffected){
		if (err) return console.log(err);
		console.log("numAffected:");
		console.log(numAffected);
	}).then(function (workorder){console.log(workorder);res.send(workorder).status(200)});
});

module.exports = router;