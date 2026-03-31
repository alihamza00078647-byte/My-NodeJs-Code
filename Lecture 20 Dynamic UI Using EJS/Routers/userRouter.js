const express = require('express');
const path = require('path');

const userRouter = express.Router();
// const rootDir = require('../Utils/pathUtils.js');

const { hostRouter, registeredHomes } = require('./hostRouter.js'); 

userRouter.get('/', (req, res, next) => {
    console.log(registeredHomes);
    // res.sendFile(path.join(rootDir, 'views', 'home.html'));
    res.render('home', {registeredHomes : registeredHomes, pageTitle : 'Home page'});
});


module.exports = userRouter;