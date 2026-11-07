const fs = require('fs');
const mongoose = require('mongoose');
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
/** @type {{host: string, port: string, database: string, protocol: string}} */
const config = require('../config/mongoConfig')[env];
const uri = `${config.protocol}://${config.host}:${config.port}/${config.database}`;
mongoose.connect(uri)
    .then(() => console.log(`Connection to db '${config.database}' established`))
    .catch((error) => console.error(`Connection to db '${config.database}' was not established.`, error));

const dbMongo = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        )
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        /** @discuss Q6 from Notes.md */
        // dbMongo.models[model.modelName] = model;
        dbMongo[model.modelName] = model;
    });

dbMongo.mongoose = mongoose;
module.exports = dbMongo;
