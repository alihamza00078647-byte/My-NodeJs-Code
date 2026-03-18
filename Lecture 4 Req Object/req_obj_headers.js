const http = require("http");

const PORT = 3001;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(PORT, () => {
    console.log(`Server Running at http://127.0.0.1:${PORT}`);
});