const http = require('http');
const fs = require('fs');
const { error } = require('console');
const { compose } = require('stream');

const PORT = 5500;


const server = http.createServer((req, res) => {
    console.log("1. Script Start");

    console.log('Reading Sync file....');
    fs.readFileSync('user.txt', 'utf8', error => {
        if (error) throw error;
    });
    console.log("Complete Reading");

    console.log('Reading Async File...');
    fs.readFile('user.txt', 'utf8', error => {
        if (error) throw error;
        // console.log("Oye oye Error A gaya E");
        console.log('Reading Aynsc file Complete');
    });
    console.log("End Script....");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
