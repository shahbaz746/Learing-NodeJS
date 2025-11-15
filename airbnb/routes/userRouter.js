// core moudels
const path = require('path')

const express = require('express')
const userRouter = express.Router()
const { register } = require('module')
const { registeredHomes } = require('./hostRouter')




userRouter.get('/', (req, res,next) => {
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes,pageTitle:'Home | Airbnb'});
})

module.exports = userRouter;