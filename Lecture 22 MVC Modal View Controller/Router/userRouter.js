const express = require('express');

// const app = express();
const userRouter = express.Router();

// const { hostRouter, registeredHomes } = require('./hostRouter');
const homeController = require('../controllers/homes');
 
userRouter.get('/', homeController.passRegisteredHomes);


exports.userRouter = userRouter;


// );