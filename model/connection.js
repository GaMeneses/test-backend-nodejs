const { MongoClient } = require('mongodb');
require('dotenv/config');
const DBNAME = process.env.DBNAME || 'store';
const DBURL = process.env.DBURL || 'mongodb://localhost:27017/store';

let schema = null;

async function connection() {
    if (schema) return Promise.resolve(schema);
    return MongoClient
        .connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((conn) => conn.db(DBNAME))
        .then((dbSchema) => {
            schema = dbSchema;
            return schema;
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}
module.exports = connection;