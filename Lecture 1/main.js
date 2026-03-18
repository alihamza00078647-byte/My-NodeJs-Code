console.log("Hello World");

const fs = require('fs');
const data = "This is a Simple String Data";

fs.writeFile("Textfile.txt", data , (err) => {
    if (err) console.log("Error Occured");
    else console.log("Operation Successful");
});