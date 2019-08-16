const router = require('express').Router();

const customer = require('./customer.js.js');
const workorder = require('./workorder.js.js');
const invoice = require('./invoice.js.js');
const cost = require('./cost.js.js');

router.use('/customer', customer);
router.use('/workorder', workorder);
router.use('/invoice', invoice);
router.use('/cost', cost);

module.exports = router;
