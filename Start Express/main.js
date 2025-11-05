const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log('Request in first midelware',req.url,req.method)
  next();
});
app.use((req, res, next) => {
  console.log('Request in sec midelware',req.url,req.method)
  res.send('Well come to Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
