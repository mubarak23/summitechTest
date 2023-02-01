// const dotenv = require("dotenv").config();
import { sign } from 'jsonwebtoken';

export async function generateToken(id) {
  console.log('we are here at some point');
  console.log(process.env.JWT_SECRET);
  const token = sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token;
}

export async function generateHashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
}
