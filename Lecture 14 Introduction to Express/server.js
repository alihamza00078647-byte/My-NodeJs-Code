// Internal Module
// const http =  require('http');

// External Module
const express = require('express');
const app = express();

// Local Module 
const requestHandler = require('./code');

app.get('/' ,(req, res, next) => {
    console.log(`First Middleware`, req.url, req.method);
    // res.send(`<p>This is First Middleware Response</p>`);
    next();
});

app.post('/calculate-results' , (req, res, next) => {
    console.log(`Second Middleware`, req.url, req.method);
    res.send(`<p>This is Middleware Response</p>`);
});

app.use('/' ,(req, res, next) => {
    console.log(`Third Middleware`, req.url, req.method);
    res.send(`<p>This is another Middleware Response</p>`);
});


// const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});

