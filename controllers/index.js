const router = require("express").Router();

const customer = require("./customer.js");
const workorder = require("./workorder.js");
//const invoice = require("./invoice.js");
//const cost = require("./cost.js");


router.use("/customer", customer);
router.use("/workorder", workorder);
//router.use("/invoice", invoice);
//router.use("/cost", cost);

module.exports = router;