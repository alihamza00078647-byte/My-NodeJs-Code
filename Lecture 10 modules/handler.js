// const { error } = require('console');

const fs = require('fs');

const sumHandler = (req, res) => {

    const dataAr = [];
        req.on("data", chunk => {
            // console.log(chunk);
            dataAr.push(chunk);
        });
        
        let recieveDataObj = {};
        req.on('end', () => {
            let parsedData = Buffer.concat(dataAr).toString();
        
            let recieveData = new URLSearchParams(parsedData);
            recieveDataObj = Object.fromEntries(recieveData);
            // console.log(recieveDataObj);
            let sum = Number(recieveDataObj.first) + Number(recieveDataObj.second);
            res.write(`<html>
        <head>
            <title>Calculator</title>
        </head>
        <body>
            <h1>Wecome To Result PAGE</h1>
            <h1>The Sum is = ${sum}</h1>
        </body>
            </html>`);
        fs.writeFile('user.txt', JSON.stringify(recieveDataObj), error => {
            if (error) console.log(error);
            else console.log("File Save, Successfully");
        });

        res.statusCode = 302;
        return res.end();
    });
}

exports.sumHandler = sumHandler;