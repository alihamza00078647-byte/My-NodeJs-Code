const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();     // Will Stop Event Loop
});
const PORT = 5500;

server.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});

