const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", {
    pageTitle: "Add-Home",
    currentPage: "add-home",
  });
};

exports.getHomeHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home | Airbnb",
      currentPage: "host-home-list",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  const { houseName } = req.body;
  const home = new Home(houseName);
  home.save();
  res.render("host/homeAdded", { pageTitle: "HomeAdded" });
};


