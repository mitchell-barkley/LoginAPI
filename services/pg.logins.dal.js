const dal = require("./auth_db");

var addLogin = function (username, password) {
    if(DEBUG) console.log('services/pg.logins.dal.addLogin - called');
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO public."Logins" (username, password) \
            VALUES ($1, $2)`;
        dal.query(sql, [username, password], (err, res) => {
            if (err) {
                if(DEBUG) console.log(err);
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
};

var getLogin = function (username) {
    if(DEBUG) console.log('services/pg.logins.dal.getLogin - called');
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM public."Logins" ORDER BY id DESC;`;
        dal.query(sql, [], (err, res) => {
            if (err) {
                if(DEBUG) console.log(err);
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
};

module.exports = {
    addLogin,
    getLogin
};