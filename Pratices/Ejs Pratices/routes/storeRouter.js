
const express = require('express')
const storeRouter = express.Router()


//Local Moudel
const homeController = require("../controllers/storeControllers");



storeRouter.get('/', homeController.getHome);
storeRouter.get('/index', homeController.getIndex);
storeRouter.get('/bookings', homeController.getBookings);
storeRouter.get('/favourit', homeController.getFavouritList);


module.exports = storeRouter;