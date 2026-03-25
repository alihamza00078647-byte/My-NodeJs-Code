const http = require("http");

const SyntaxError = require('./errors.js');
const PORT = 3002;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    SyntaxError(req, res);
});
server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});