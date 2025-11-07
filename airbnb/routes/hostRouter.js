// core moudels
const path = require('path')

const express = require('express')
const hostRouter = express.Router()
const rootDir = require('../Utiles/pathUtil')

hostRouter.get('/host/add-home', (req, res,next) => {

  res.sendFile(path.join(rootDir,'views','add-home.html'))
})

const registeredHomes = [];
hostRouter.post('/host/add-home', (req, res,next) => {
  console.log(req.body);
  registeredHomes.push({houseName: req.body.houseName});
  res.sendFile(path.join(rootDir,'views','homeAdded.html'))
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;