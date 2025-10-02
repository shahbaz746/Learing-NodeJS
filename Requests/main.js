const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use('/blog', blog)


app.get('/', (req, res) => {
    console.log("It is a get request")
  res.send('Hello World get!')
})
app.get('/index', (req, res) => {
    console.log("It is a index html")
  res.sendFile('temeplates/index.html',{root: __dirname})
})
app.post('/', (req, res) => {
    console.log("It is a post request")
  res.send('Hello World Pust!')
})
app.put('/', (req, res) => {
    console.log("It is a put request")
  res.send('Hello World put!')
})
app.delete('/', (req, res) => {
    console.log("It is a delete request")
  res.send('Hello World delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
