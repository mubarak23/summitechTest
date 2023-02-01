const Sequelize = require('sequelize');
const postgresDb = require('../database/Pgconfig');

const Stock = postgresDb.define(
  'stocks',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: new Sequelize.UUIDV4(),
      unique: true,
      primaryKey: true,
    },
    batchId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    productId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    softDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Stock;
