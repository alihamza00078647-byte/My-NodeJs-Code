
const { requestHandler } = require('./main.js');
// const sumHandler = require('./handler.js'); 

const http = require('http');
const PORT = 5500;
const server = http.createServer(requestHandler);


server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});