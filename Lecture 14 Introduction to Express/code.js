
const requestHandler = (req, res) => {
    res.setHeader("Context-type", "text/html");
    
    if (req.url === '/'){
        res.write(`<h1>Welcome to Home PAGE</h1>
        <a href="/calculator" target="_blank">Calculator</a>`);
        return res.end();
    } else if (req.url.toLowerCase() === '/calculator') {
        res.write(`<html>
    <head>
    <title>Calculator</title>
    </head>
    <body>
   
        <form action="/calculate-results" method="POST">
            <input type="number" name="first" placeholder="1st No">
            <input type="number" name="second" placeholder="2nd No">
            <br>
            <button type="submit">Sum</button>
        </form>
    </body>
    </html>`);
    
    return res.end();
    } else if (req.url.toLowerCase() === '/calculate-results' && req.method === "POST"){
        
        const dataAr = [];
        req.on("data", chunk => {
            console.log(chunk);
            dataAr.push(chunk);
        });
        
        const recieveDataObj = {};
        let sum = 0;
        req.on('end', () => {
            let parsedData = Buffer.concat(dataAr).toString();
        
            let recieveData = new URLSearchParams(parsedData);
            const recieveDataObj = Object.fromEntries(recieveData);
            sum = Number(recieveDataObj.first) + Number(recieveDataObj.second);
            // console.log(sum);
            res.write(`<html>
        <head>
            <title>Calculator</title>
        </head>
        <body>
            <h1>Wecome To Result PAGE</h1>
            <h1>The Sum is = ${sum}</h1>
        </body>
            </html>`);

        res.statusCode = 302;
        return res.end();
        });
    } 
}

module.exports = requestHandler;