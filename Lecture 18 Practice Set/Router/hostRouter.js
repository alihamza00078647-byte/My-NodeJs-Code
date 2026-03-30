const path = require('path');
const express = require('express');

const userRouter = express.Router();
const rootDir = require('../utils/pathUtils.js');

userRouter.get('/home', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'formPage.html'));
});


userRouter.post('/home', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'SubmitSuccess.html'));
});



module.exports = userRouter;