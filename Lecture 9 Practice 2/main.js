 
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
            <input type="number" name="1st No" placeholder="1st No">
            <input type="number" name="2nd No" placeholder="2nd No">
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
        req.on('end', () => {
            let parsedData = Buffer.concat(dataAr).toString();
        
            let recieveData = new URLSearchParams(parsedData);
            const ActualValue = Array.from(recieveData.values());
            let sum = 0;
            for (let i = 0; i<ActualValue.length; i++){
                sum += parseInt(ActualValue[i]); 
            }
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