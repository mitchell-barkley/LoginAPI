var router = require('express').Router();
const loginsDal = require('../../services/pg.logins.dal.js');

if (DEBUG) console.log('API - logins.js - called');

router.post('/', async (req, res) => {
    if (DEBUG) console.log('routes/api/logins.js - POST / - called');
    try {
        const result = await loginsDal.addLogin(req.body.username, req.body.password);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', async (req, res) => {
    if (DEBUG) console.log('routes/api/logins.js - GET / - called');
    try {
        const theLogins = await loginsDal.getLogin();
        res.json(theLogins);
    } catch {
        res.statusCode = 503;
        res.json({message: 'Service Unavailable', status: 503})
    }
});

module.exports = router;