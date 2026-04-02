const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path_Utils');
const { root } = require('postcss');

//  fake database
// let registeredHomes = [];


module.exports = class house {
    constructor(houseName, price, location, rating) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
    }

    save(){
        // But we need database here. So, We use fetch function
        house.fetchAll(registeredHomes => {
            registeredHomes.push(this);
            const filePath = path.join(rootDir, 'data', 'homesData.json');
            fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
                console.log(err);
            });
        });
    }
    // Call Back is a function
    static fetchAll(callback){
        const filePath = path.join(rootDir, 'data', 'homesData.json');
        fs.readFile(filePath, (err, data) => {
            if (!err && !(data == "")){
                callback(JSON.parse(data));
                // registeredHomes = JSON.parse(data);
            } else {
                callback([]);
            }
        });
    }
}