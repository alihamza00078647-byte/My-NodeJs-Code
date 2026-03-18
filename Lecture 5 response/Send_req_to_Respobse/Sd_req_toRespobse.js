const http = require("http");

const PORT = 5500;
const server = http.createServer((req, res) => {


    console.log(req.url, req.method, req.headers);
    res.setHeader('Context-type', 'text/html');
    console.log(req.url, req.method, req.headers);
    if (req.url === '/'){
        res.setHeader('Context-type', 'text/html');
        res.write(`<html>
        <head><title>1st Page</title></head>
        <body><h1>Root Page</h1></body>
        </html>`);
        return res.end();
    } else {
        res.setHeader('Context-type', 'text/html');
        res.write(`<html>
        <head><title>My Combine Response</title></head>
        <body><h1>Data V Change E</h1></body>
        </html>`);
        return res.end();
    }
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});