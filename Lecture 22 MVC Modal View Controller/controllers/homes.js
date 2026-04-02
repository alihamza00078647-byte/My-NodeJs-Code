// const registeredHomes = [];
const house =  require('../model/home');

exports.getAddHomes =  (req, res, next) => {
    res.render('form', {pageTitle : 'Add Home'});
}


exports.postAddHomes = (req, res, next) => {

    const  { houseName, price, location, rating } = req.body;
    const home = new house(houseName, price, location, rating);
    
    // const  house = new house(req.body.houseName, req.body.price, req.body.location, req.body.rating);
    home.save();
    res.render('success', {pageTitle : 'Submit Successfully'});
}


exports.passRegisteredHomes = (req, res, next) => {
    // const registeredHomes = house.fetchAll(registeredHomes => {
    //     res.render('home', {registeredHomes : registeredHomes, pageTitle : 'Home PAGE'});
    // });
    house.fetchAll(registeredHomes => {
        res.render('home', {registeredHomes : registeredHomes, pageTitle : 'Home PAGE'});
    });
}


