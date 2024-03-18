const { ObjectId } = require('mongodb');
const dal = require("./m.auth_db.js");

async function getLogins() {
    if(DEBUG) console.log('m.logins.dal.getLogins - called');
    try {
        await dal.connect();
        const cursor = dal.db("Auth").collection("logins").find();
        const results = await cursor.toArray();
        return results;
    } catch (err) {
        console.log(err);
    } finally {
        dal.close();
    }
};

async function getLoginById(id) {
    if(DEBUG) console.log('m.logins.dal.getLoginById - called');
    try {
        await dal.connect();
        const database = dal.db("Auth");
        const collection = database.collection("logins");
        const results = await collection.find({ _id: new ObjectId(id) }).toArray();
        if(DEBUG) console.table(results);
        return results;
    } catch (err) {
        console.log(err);
    } finally {
        dal.close();
    }
};

module.exports = {
    getLogins,
    getLoginById
};