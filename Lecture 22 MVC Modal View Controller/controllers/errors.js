
exports.page404 = (req, res, next) => {
    res.render('404', {pageTitle : 'PAGE Not Found'});
}
