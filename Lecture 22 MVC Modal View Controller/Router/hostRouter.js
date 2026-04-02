const express = require('express');

const hostRouter = express.Router();

const homeController = require('../controllers/homes');



hostRouter.get('/add-home', homeController.getAddHomes);



hostRouter.post('/add-home', homeController.postAddHomes);

exports.hostRouter = hostRouter;


