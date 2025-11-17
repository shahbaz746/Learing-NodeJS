const Home = require("../models/home");

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home | Airbnb",
      currentPage: "home",
    })
  );
};
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home | Airbnb",
      currentPage: "index",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};
exports.getFavouritList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/bookings", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourit List",
      currentPage: "favourites",
    })
  );
};
