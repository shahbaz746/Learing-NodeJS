const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", {
    pageTitle: "Add-Home",
    currentPage: "add-home",
  });
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  const { houseName } = req.body;
  const home = new Home(houseName);
  home.save();
  res.render("homeAdded", { pageTitle: "HomeAdded" });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: home,
      pageTitle: "Home | Airbnb",
      currentPage: "home",
    })
  );
  console.log(registeredHomes);
};
