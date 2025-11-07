// core moudels
const path = require('path')

const express = require('express')
const userRouter = express.Router()
const rootDir = require('../Utiles/pathUtil')
const { register } = require('module')
const { registeredHomes } = require('./hostRouter')




userRouter.get('/', (req, res,next) => {
  console.log(registeredHomes);
  res.sendFile(path.join(rootDir,'views','home.html'))
})

module.exports = userRouter;