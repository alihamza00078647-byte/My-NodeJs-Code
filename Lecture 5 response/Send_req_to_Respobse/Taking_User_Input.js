const http = require("http");

const PORT = 5500;
const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    // res.setHeader('Context-type', 'text/html');
    console.log(req.url, req.method, req.headers);
    // if (req.url === '/'){
        res.setHeader('Context-type', 'text/html');
        res.write(`<html>
        <head><title>Home Page</title></head>
        <body><h1>Fill Form</h1>
        <form action="/poducts">
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
    // }
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});