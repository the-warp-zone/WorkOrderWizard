const request = require("supertest");
//const router = require("./cost");
const Cost = require("../models/cost");

const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://localhost/" + process.env.DEV_MONGODB;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));db.once('open', function() {
	//console.log("Connected to MongoDB.");
  // we're connected!
	});

const newcost = {
		vendorReceiptSN: "ABCDEFGH1234",
		vendor: "Dome Hepot",
		datePurchased: "08-08-1969",
		amount: 169
	};

async function initializeDB(){
	
	
await db.dropCollection("costs", function (err, result) {

         //drop the MongoDB's Cost collection, and repoulate it.
});

Cost(newcost).save();
}

beforeAll(done => {

  initializeDB();
  done();
});

afterAll(() => mongoose.disconnect());

describe("API Cost Route Tests", () => {

  test("This route should hit the main get for /cost", async () => {
	  const response = await request("http://localhost:3001").get("/cost");
	  expect(response.res.text).toBe('Get Route Hit');
	  expect(response.statusCode).toBe(200);
  });
  
  /*
  test("This route should hit the get route for /cost/all", async () => {
	  const response = await request("http://localhost:3001").get("/cost/all");
	  expect(Content-Type).toBe("json");
	  expect(response.body[0]).toBe(newcost);
	  expect(response.statusCode).toBe(200);
  });
  */
  
}); 