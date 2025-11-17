// core moudels
const path = require('path')

// external moudules
const express = require('express')
// Local modules
const storeRouter = require('./routes/storeRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./Utiles/pathUtil')
const errorsController = require("./controllers/errors");
const app = express()

//Local Moudel

app.set('view engine', 'ejs');
app.set('views','views');

const port = 3001
app.use(express.static(path.join(rootDir,'public')));

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})
app.use(express.urlencoded())
app.use(storeRouter);
app.use(hostRouter);

app.use(errorsController.pageNotFound);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})