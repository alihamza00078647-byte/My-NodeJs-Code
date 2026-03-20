const { sumHandler } = require('./handler.js'); 

const requestHandler = (req, res) => {
    res.setHeader("Context-type", "text/html");
    
    if (req.url === '/'){
        res.write(`<h1>Welcome to Home PAGE</h1>
        <a href="/calculator" target="_blank">Calculator</a>`);
        return res.end();
    } else if (req.url.toLowerCase() === '/calculator') {
        res.write(`<html>
    <head>
    <title>Calculator</title>
    </head>
    <body>
   
        <form action="/calculate-results" method="POST">
            <input type="number" name="first" placeholder="1st No">
            <input type="number" name="second" placeholder="2nd No">
            <br>
            <button type="submit">Sum</button>
        </form>
    </body>
    </html>`);
    
    return res.end();
    } else if (req.url.toLowerCase() === '/calculate-results' && req.method === "POST"){
        sumHandler(req, res);
        return
    }
}

exports.requestHandler = requestHandler;