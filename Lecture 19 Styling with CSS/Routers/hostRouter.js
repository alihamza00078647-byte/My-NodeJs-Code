// External Module
const express = require('express');

// Core Module 
const path = require('path');

const rootDir = require('../Utils/pathUtils.js');
const hostRouter = express.Router();


hostRouter.get('/Clothes', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form.html'));
});


hostRouter.post('/Clothes', (req, res, next) => {
    
    res.sendFile(path.join(rootDir, 'views', 'Success.html'));
});

module.exports = hostRouter;


