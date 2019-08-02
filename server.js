const express = require('express');
const routes = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3001;


const mongoose = require('mongoose');

// ===============================================================================
// ROUTING
// ===============================================================================


	
	// If deployed, use the deployed database. Otherwise use the local database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WorkOrderWizard";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to MongoDB.");
  // we're connected!
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start the API server

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



// Serve up static assets (usually on heroku)
/*
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
	app.use(express.static("client/public"));
}
*/
//app.use(express.static("client/public"));
// Add routes, both API and view


// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
/*
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
*/