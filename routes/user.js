const express = require('express');
const {
  createUserAccount,
  userLogin,
} = require('../controllers/authcontroller.js');
const router = express.Router();

router.post('/users/register', createUserAccount);

router.post('/users/login', userLogin);

module.exports = router;
