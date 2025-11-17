const express = require("express");
const hostRouter = express.Router();

//Local Moudel
const hostControllers = require("../controllers/hostControllers");

hostRouter.get("/host/add-home", hostControllers.getAddHome);
hostRouter.post("/host/add-home", hostControllers.postAddHome);
hostRouter.get("/host/host-home-list", hostControllers.getHomeHomeList);

module.exports = hostRouter;