const { render } = require("ejs");
const houseList = require("../model/home");


exports.getIndex = (req, res, next) => {
    houseList.fetchAll(registeredHomes => {
        res.render('store/index', {pageTitle : 'index', registeredHomes : registeredHomes});
    });
}


exports.bookingList = (req, res, next) => {
    res.render('store/booking', {pageTitle : 'booking Homes'});
}


exports.favouriteList = (req, res, next) => {
    houseList.fetchAll(registeredHomes => {
        res.render('store/favourite-list', {pageTitle : 'favourite Home List', registeredHomes : registeredHomes});
    });
}


exports.getHomePage = (req, res, next) => {
    houseList.fetchAll(registeredHomes => {
        res.render('store/userhomePage', {pageTitle : 'home page', registeredHomes : registeredHomes});
    });
}

