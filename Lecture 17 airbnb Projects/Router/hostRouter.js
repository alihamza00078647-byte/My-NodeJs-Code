// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/path_utils.js');


hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post('/add-home', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'HomeAdded.html'));
});

module.exports = hostRouter;