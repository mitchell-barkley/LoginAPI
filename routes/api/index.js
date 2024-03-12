var router = require('express').Router();

if (DEBUG) console.log('API - index.js - called');

const loginsRouter = require('./logins.js');
router.use('/logins', loginsRouter);

module.exports = router;