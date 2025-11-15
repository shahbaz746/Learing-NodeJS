
const express = require('express')
const userRouter = express.Router()


//Local Moudel
const homeController = require("../controllers/home");




userRouter.get('/', homeController.getHome);

module.exports = userRouter;