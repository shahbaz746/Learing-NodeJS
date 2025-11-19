// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const e = require("express");

const favouritDataPath = path.join(rootDir, "data","favourit.json")

module.exports = class Favourite {
  static addToFavourit(homeId,callback){
     Favourite.getFavourits((favourites) => {
          if(favourites.includes(homeId)){
            callback("Already in favourites");
          } else {
          favourites.push(homeId);
          const homeDataPath = path.join(rootDir, "data", "homes.json");
          fs.writeFile(favouritDataPath, JSON.stringify(favourites), callback);
          }
        });

  }
  
  static getFavourits(callback){
    const favouritDataPath = path.join(rootDir, "data", "homes.json");
        fs.readFile(favouritDataPath, (err, data) => {
          callback(!err ? JSON.parse(data) : []);
        });
  }
};
