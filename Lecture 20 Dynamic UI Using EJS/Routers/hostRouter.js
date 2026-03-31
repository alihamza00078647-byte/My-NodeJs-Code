// External Module
const express = require('express');

// Core Module 
const path = require('path');

const rootDir = require('../Utils/pathUtils.js');
const hostRouter = express.Router();


hostRouter.get('/Clothes', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form.html'));
});

const registeredHomes = [];

hostRouter.post('/Clothes', (req, res, next) => {
    // registeredHomes.push(req.body);
    registeredHomes.push({name : req.body.name }, {email : req.body.email});
    res.sendFile(path.join(rootDir, 'views', 'Success.html'));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;



