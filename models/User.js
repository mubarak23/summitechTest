/* eslint-disable prettier/prettier */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
// "use strict";
// import { UUID, UUIDV4, STRING, BOOLEAN, Sequelize } from 'sequelize';
// import PostgresDb from '../database/Pgconfig.js';

const Sequelize = require('sequelize');
const postgresDb = require('../database/Pgconfig');

const User = postgresDb.define(
  'users',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: new Sequelize.UUIDV4(),
      unique: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: true,
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

module.exports = User;
