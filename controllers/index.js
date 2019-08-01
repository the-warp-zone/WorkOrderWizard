const router = require("express").Router();
const apiRoutes = require("./api-routes.js");

router.use("/api", apiRoutes);

module.exports = router;