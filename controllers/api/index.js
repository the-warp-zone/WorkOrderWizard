const router = require("express").Router();
const apiRoutes = require("./api-routes.js");

// Book routes
router.use("/apiroutes", apiRoutes);

module.exports = router;