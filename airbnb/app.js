// core moudels
const path = require('path')

// external moudules
const express = require('express')
// Local modules
const userRouter = require('./routes/userRouter')
const {hostRouter} = require('./routes/hostRouter')
const rootDir = require('./Utiles/pathUtil')
const app = express()

app.set('view engine', 'ejs');
app.set('views','views');

const port = 3000
app.use(express.static(path.join(rootDir,'public')));

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})
app.use(express.urlencoded())
app.use(userRouter);
app.use(hostRouter);

app.use((req, res,next) => {
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
