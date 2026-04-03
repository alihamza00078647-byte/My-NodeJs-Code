const http = require('http');
const requestHandler = require('./user_module.js');

const PORT = 5500;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
