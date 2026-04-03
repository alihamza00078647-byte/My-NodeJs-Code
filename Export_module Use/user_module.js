const fs = require('fs');

const requestHandler = (req, res) => {
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
            // Give Data Need To Decode it.
            let parseData = Buffer.concat(body).toString();
            
            const parameter = new URLSearchParams(parseData);
            /* 1st Method
            const jsonObj = {};
            for (const [key, value] of parameter.entries()){
                jsonObj[key] = value;
            } */

            // receive Data & parse it to Object by coverting into key values pairs
            const BodyObj = Object.fromEntries(parameter);
            console.log(BodyObj);
            fs.writeFileSync('user.txt', JSON.stringify(BodyObj));

            res.statusCode = 302; // Redirect Status Code 
            res.setHeader('Location', '/');
            return res.end();
        });
        
    } else {
        res.write(`<html>
        <head><title>Last PAGE</title></head>
        <body><h1> This is Last Page </h1></body>
        </html>`);
        return res.end();
    }
};


module.exports = requestHandler;