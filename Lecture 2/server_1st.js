// First Node JS server
const http = require('http')
const PORT = 5500;

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`);
})

// server.listen(3001);
// http.createServer(reqListenner);