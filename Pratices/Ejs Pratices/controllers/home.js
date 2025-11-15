const registeredHomes = [];


exports.getAddHome = (req, res, next) => {
  res.render("add-home", { 
    pageTitle: "Add-Home" ,
    currentPage: "add-home"
  });
}




exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("homeAdded", { pageTitle: "HomeAdded" });
};

exports.getHome = (req, res,next) => {
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes,pageTitle:'Home | Airbnb'});
}


