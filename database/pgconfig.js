/* eslint-disable prettier/prettier */
const Sequelize = require('sequelize');
const DbConfig = require('../config/config.js');
// [process.env.NODE_ENV];

const PostgresDb = new Sequelize(
  DbConfig.development.database,
  DbConfig.development.username,
  DbConfig.development.password,
  {
    host: DbConfig.development.host,
    dialect: DbConfig.development.dialect,
    raw: true,
    port: DbConfig.development.port,
    seederStorage: DbConfig.development.seederStorage,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
    dialectOptions: {
      connectTimeout: 100000,
    },
  }
);

PostgresDb.authenticate()
  .then(() => {
    console.log('Connection with database has been established successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = PostgresDb;
