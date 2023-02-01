// import express, { json, urlencoded } from 'express';
const express = require('express');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const stockRoute = require('./routes/stock');
const dotenv = require('dotenv').config();

// import productRoute from './routes/product.js';
// import userRoute from './routes/user.js';
// import stockRoute from './routes/stock.js';
const errorHandler = require('./middleware/errorMiddleware');
// import errorHandler from './middleware/errorMiddleware.js';
// import {} from 'dotenv/config';

const PORT = process.env.PORT || 5056;

const app = express();

// json Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default routeƒ
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Pro Wallet Service API' });
});

app.use('/api', userRoute);
app.use('/api', productRoute);
app.use('/api', stockRoute);

// app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    `Started ${process.env.NODE_ENV} server on port  ${process.env.PORT}`
  )
);
