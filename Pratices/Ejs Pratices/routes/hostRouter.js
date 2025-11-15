const express = require("express");
const hostRouter = express.Router();

//Local Moudel
const homeController = require("../controllers/home");

hostRouter.get("/host/add-home", homeController.getAddHome);
hostRouter.post("/host/add-home", homeController.postAddHome);

exports.hostRouter = hostRouter;
