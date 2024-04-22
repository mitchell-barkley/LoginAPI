const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Auth',
    password: '',
    port: 16000,
});

module.exports = pool;
