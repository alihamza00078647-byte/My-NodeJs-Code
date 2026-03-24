const http = require('http');
const fs = require('fs');
const PORT = 5500;

const server = http.createServer((req, res) => {
    console.log("1. Start of Script");
    
    // console.log("2. Reading File Sync.....");
    Promise.resolve()
    .then(() => {
        console.log("2. Microtask of Promise");
    });

    setTimeout(() => console.log("Timer Function"), 0);

    fs.readFile("user.txt", 'utf8', () => {
        console.log("I/O Operation");
    });

    setImmediate(() => {
        console.log("5. Immediate Function");
    });

    process.on('exit', () => {
        console.log("Exit Event");
    });
    console.log("End of Scrpit");
    return res.end();
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
});