/* eslint-disable prettier/prettier */
const sequelize = require('../database/Pgconfig.js');
const User = require('../models/User.js');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const { sign } = pkgs;

// @Desc Register a new user
// @Route /user
// @Access Public

exports.createUserAccount = async (req, res, next) => {
  return sequelize.transaction(async (t) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please Includes all fields' });
      }

      // find if user already exist
      const userExist = await User.findOne({
        where: { email: email },
      });
      if (userExist) {
        return res.status(400).json({
          message:
            'User with the provided email already exist, proceed to login',
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      // create user account
      const newUserAccount = await User.create(
        {
          name: name,
          email: email,
          password: hashPassword,
          isActive: true,
          softDelete: false,
        },
        { transaction: t }
      );
      await t.commit();
      // set the token in cookie header
      return res.status(201).send({
        id: newUserAccount.id,
        name: newUserAccount.name,
        token: await this.generateToken(newUserAccount.id),
      });
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });
};

// @Desc Auth user Login
// @Route /user/login
// @Access Public
exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please Include all Field' });
    }
    // find if user already exist
    const userExist = await User.findOne({
      where: { email: email },
    });
    if (userExist && (await bcrypt.compare(password, userExist.password))) {
      res.status(200).json({
        id: userExist.id,
        name: userExist.name,
        token: await this.generateToken(userExist.id),
      });
    } else {
      return res.status(401).json({ message: 'Invalide Credentials' });
    }
  } catch (error) {
    return next(error);
  }
};

// @Desc Generate Auth Token
exports.generateToken = async (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  return token;
};
