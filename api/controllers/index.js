const router = require("express").Router();

const customer = require("./customer.js");
const workorder = require("./workOrder.js");
const invoice = require("./invoice.js");
const cost = require("./cost.js");


router.use("/api/customer", customer);
router.use("/api/workorder", workorder);
router.use("/api/invoice", invoice);
router.use("/api/cost", cost);

module.exports = router;