// External Module
const express = require('express');
// Core Module
const path = require("path");

// local Module
const storeRouter = express.Router();
const storeController = require("../controllers/store");


storeRouter.get('/', storeController.getIndex);

storeRouter.get('/home', storeController.getHomePage);

storeRouter.get('/booking', storeController.bookingList);

storeRouter.get('/favourite', storeController.favouriteList);



exports.storeRouter = storeRouter;