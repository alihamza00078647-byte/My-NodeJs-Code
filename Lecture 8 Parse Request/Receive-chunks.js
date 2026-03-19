const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

const PORT = 5500;

const server = http.createServer((req, res) => {

    if (req.url === '/'){
        res.setHeader('Context-type', 'text/html');
        res.write(`<html>
        <head><title>Home Page</title></head>
        <body><h1>Fill Form</h1>
        <form action="/submit-details" method="POST">
            <input type="text" name="username" placeholder="Enter Username...">
        <label for="male">
            male
            
            <input type="radio" name="gender" value="male">
        </label>
        
        <label for="female">
            female
            <input type="radio" name="gender" value="female">
        </label>
        <input type="submit" value="submit">
        </form>
        </body>
        </html>`);
        return res.end();
    } 
    else if (req.url.toLowerCase() === '/submit-details' && req.method === "POST"){
        const body = [];
        
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            let parseData = Buffer.concat(body).toString();
            console.log(parseData);
        });


        // fs.writeFileSync('user.txt', 'Waqas Sufa College');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    } else {
        res.write(`<html>
        <head><title>Last PAGE</title></head>
        <body><h1> This is Last Page </h1></body>
        </html>`);
        return res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});