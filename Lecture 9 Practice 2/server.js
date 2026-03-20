// import  {requestHandler} from './main.js';
const requestHandler = require('./main.js');

const http = require('http');
const PORT = 5500;
const server = http.createServer(requestHandler);


server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});