const express = require('express');
const PORT = 3002;

const app = express();

// app.use('/', (req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// });

app.get('/', (req, res, next) => {
    res.send(`<html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Fill Form</title>
        </head>
        <body>
            <h1>Welcome To The Website</h1>
            <h2>GO To Contact Us PAGE & fill Form</h2>
        </body>
        </html>`);
});

app.get('/contact-us', (req, res, next) => {
    res.send(`<form action="/contact-us" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="email" name="email" placeholder="Email">
        <input type="submit" value="Submit">
    </form>`);
});


app.post('/contact-us', (req, res, next) => {
    res.send(`<h2>Thanks for Submitting Form.</h2>`);
});





app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})