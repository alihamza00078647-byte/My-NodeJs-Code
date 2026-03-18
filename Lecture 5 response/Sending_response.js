const http = require("http");

const PORT = 5500;
const server = http.createServer((req, res) => {


    console.log(req.url, req.method, req.headers);
    res.setHeader('Context-type', 'text/html');
    /* res.write('<html>');
    res.write('<head><title>My first Response </title></head>');
    res.write('<body><h1>Oye Oye Ki Huya</h1></body>');
    res.write('</html>'); */
    res.write(`<html>
        <head><title>My Combine Response</title></head>
        <body><h1>Data V Change E</h1></body>
        </html>`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});