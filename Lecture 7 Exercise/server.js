const http = require('http');
const PORT = 5500;

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    res.setHeader('Context-type', 'text/html');

    if (req.url === '/'){
        res.write(`<html>
    <head>
        <title>www.myntra.com/</title>
    </head>
    <body>
        <ul>
            <a href="/home" target="_blank"><li>Home</li></a>
            <a href="/men" target="_blank"><li>Men</li></a>
            <a href="/women" target="_blank"><li>Women</li></a>
            <a href="/kids" target="_blank"><li>Kids</li></a>
            <a href="/cart" target="_blank"><li>Cart</li></a>
        </ul>
    </body>
    </html>`);
    }

    else if (req.url === '/home') {
        res.write(`<html>
        <head><title>www.myntra.com/Home</title></head>
        <body><h1>Welcome to Myntra Home PAGE</h1></body>
    </html>`);
        return res.end();
    }
    else if (req.url === '/men') {
        res.write(`<html>
        <head><title>www.myntra.com/men</title></head>
        <body><h1> Styles For Men </h1></body>
    </html>`);
        return res.end();
    }

    else if (req.url === '/women') {
        res.write(`<html>
        <head><title>www.myntra.com/women</title></head>
        <body><h1> Women inclusive Styles </h1></body>
    </html>`);
        return res.end();
    }

    else if (req.url === '/kids') {
        res.write(`<html>
        <head><title>www.myntra.com/kids-fasion</title></head>
        <body><h1> Kids fasion brands</h1></body>
    </html>`);
        return res.end();
    }

    else if (req.url === '/cart') {
        res.write(`<html>
        <head><title>www.myntra.com/cart</title></head>
        <body><h1> Add To Cart</h1></body>
    </html>`);
        return res.end();
    }
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});