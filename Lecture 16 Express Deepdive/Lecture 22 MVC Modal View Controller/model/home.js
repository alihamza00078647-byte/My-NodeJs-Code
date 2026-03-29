const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path_Utils');
const { root } = require('postcss');

//  fake database
let registeredHomes = [];


module.exports = class house {
    constructor(houseName, price, location, rating) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
    }

    save(){
        registeredHomes.push(this);
        const filePath = path.join(rootDir, 'data', 'homesData.json');
        fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
            console.log(err);
        });
    }
    static fetchAll(){
        const filePath = path.join(rootDir, 'data', 'homesData.json');
        fs.readFile(filePath, (err, data) => {
            console.log('phar Liya E', err, JSON.parse(data));
            if (!err){
                registeredHomes = JSON.parse(data);
            }
            return registeredHomes;
        });
    }
}