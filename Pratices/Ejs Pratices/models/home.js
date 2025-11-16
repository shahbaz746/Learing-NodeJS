const fs = require("fs");
const path = require("path");
const rootDir = require("../Utiles/pathUtil");
const { register } = require("module");

module.exports = class Home {
  constructor(houseName) {
    this.houseName = houseName;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Conculiding Error", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (error, data) => {
      console.log("File Reading ", error, data);
      callback(!error ? JSON.parse(data) : []);
    });
  }
};
