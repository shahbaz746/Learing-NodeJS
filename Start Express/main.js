const express = require('express')
const app = express()
const port = 

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!2122   ')
})

app.get('/about', (req, res) => {
  res.send('About Me')
})

app.get('/contact', (req, res) => {
  res.send('Contact Us')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:sulg/:secend', (req, res) => {
    console.log(req.params)
    console.log(req.query)
  res.send(`hello ${req.params.sulg} and ${req.params.secend}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})