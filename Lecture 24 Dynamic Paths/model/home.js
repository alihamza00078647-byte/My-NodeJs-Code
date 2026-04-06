// Database
// let registeredHomes = [];


const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/path_Utils');
const { root } = require('postcss');
const { register } = require('module');



module.exports = class houseList{
    constructor(houseName, price, location, rating, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(){
        this.id = Math.ceil(Math.random() * 100).toString();
        houseList.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            const filePath = path.join(rootDir, 'data', 'homesdata.json');
            fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback){
        const filePath = path.join(rootDir, 'data', 'homesdata.json');
        fs.readFile(filePath, (err, data) => {
            // callback(!err ? JSON.parse(data): []);
            if (!err) {
                callback(JSON.parse(data));
            } else {
                // return [];
                console.log(err);
            }
        });
    }
}