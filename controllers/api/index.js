const router = require("express").Router();
const apiRoutes = require("./api-routes.js");

// Book routes
router.use("/burger", apiRoutes);

module.exports = router;