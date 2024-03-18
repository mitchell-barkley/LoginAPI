const { MongoClient } = require('mongodb');

// const uri = "mongodb://localhost:27017";
const atlas = "mongodb+srv://mitchellbarkley:nbb54WMA8YFw7akw@billow001.n0h0yfw.mongodb.net/"

// const pool = new MongoClient(uri);
const pool = new MongoClient(atlas);

module.exports = {
    pool,
};