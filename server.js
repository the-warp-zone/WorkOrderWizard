// Dependencies
const express = require("express");

// Initialize Express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Set the app to listen on port 3000
app.listen(3001, function() {
  console.log("App running on port 3001!");
});