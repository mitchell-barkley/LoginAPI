const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Auth',
    password: 'admin',
    port: 8000,
});

module.exports = pool;