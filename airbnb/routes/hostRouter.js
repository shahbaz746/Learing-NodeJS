// core moudels
const path = require('path')

const express = require('express')
const hostRouter = express.Router()
const rootDir = require('../Utiles/pathUtil')

hostRouter.get('/host/add-home', (req, res,next) => {

  res.sendFile(path.join(rootDir,'views','add-home.html'))
})
hostRouter.post('/host/add-home', (req, res,next) => {

  res.sendFile(path.join(rootDir,'views','homeAdded.html'))
})

module.exports = hostRouter;