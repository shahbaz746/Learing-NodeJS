const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Shahbaz"
    let searchText = "search"
  res.render("index", {siteName:siteName,searchText:searchText})
})

app.get('/blog\:sulg', (req, res) => {
    let title = "Adida"
    let content = "it is a very good brand"
  res.render("blogPost", {title:title,content:content})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
