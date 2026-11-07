require('dotenv').config();

module.exports = {
  development: {
    host: process.env.DB_MONGO_HOST,
    port: process.env.DB_MONGO_PORT,
    database: process.env.DB_MONGO_NAME,
    protocol: process.env.DB_MONGO_PROTOCOL,
  },
  test: {
    host: process.env.DB_MONGO_HOST,
    port: process.env.DB_MONGO_PORT,
    database: process.env.DB_MONGO_NAME,
    protocol: process.env.DB_MONGO_PROTOCOL,
  },
  production: {
    host: process.env.DB_MONGO_HOST,
    port: process.env.DB_MONGO_PORT,
    database: process.env.DB_MONGO_NAME,
    protocol: process.env.DB_MONGO_PROTOCOL,
  },
};
