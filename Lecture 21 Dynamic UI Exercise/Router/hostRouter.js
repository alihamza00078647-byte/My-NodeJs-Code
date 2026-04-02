const express = require('express');
// const path
const hostRouter = express.Router();

// const app = express();


hostRouter.get('/add-home', (req, res, next) => {
    res.render('form', {pageTitle : 'Add Home'});
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
    registeredHomes.push(req.body);
    res.render('success', {pageTitle : 'Submit Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

