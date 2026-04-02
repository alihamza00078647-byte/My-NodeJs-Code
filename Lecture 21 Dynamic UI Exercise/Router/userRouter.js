const express = require('express');

// const app = express();
const userRouter = express.Router();

const { hostRouter, registeredHomes } = require('./hostRouter');
 
userRouter.get('/', (req, res, next) => {

    // console.log({Name : req.body.name }, { Price : req.body.price} , { Location : req.body.location}, { Rating : req.body.rating });
    
    res.render('home', {registeredHomes : registeredHomes, pageTitle : 'Home PAGE'});
});

exports.userRouter = userRouter;