const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourits(favourites =>{
 Home.fetchAll((registeredHomes) =>{
  const favouritHomes = registeredHomes.filter(home =>
    favourites.includes(home.id));
  console.log("Favourit Homes:", favouritHomes);
    res.render("store/favourite-list", {
      favouritHomes: favouritHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
  });
  })  
 
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("Came to add to favourit",req.body)
  Favourite.addToFavourit(req.body.id,error=>{
    if(error){
      console.log("Error adding to favourit")
    }
    res.redirect("/favourites")
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeID = req.params.homeID;
  console.log("At home details pages", homeID);
  Home.findById(homeID, (home) => {
    console.log("Home Details Found:", home);
    if (!home) {
      console.log("Home not found, redirecting to homes list");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home, 
        pageTitle: "Home Details",
        currentPage: "home",
      });
    }
  });
};
