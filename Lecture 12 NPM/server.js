const http = require('http');
const PORT = 3001;

const server = http.createServer((req, res) => {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This is New Mode</h1>
    <h1>Oye Ki kiya E</h1>
</body>
</html>`)
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});