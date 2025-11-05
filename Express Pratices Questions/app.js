const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000



app.get('/', (req, res,next) => {
    console.log('Home Page Requested');
    next();
});
app.get('/contact-us', (req, res,next) => {
  res.send('<form action="contact-us" method="POST"> <label for="name">Name:</label><input type="text" id="name" name="name" required><br><label for="email">Email:</label><input type="email" name="email" id="email" required>  <br><button type="submit">Submit</button></form>');
});

app.use(express.urlencoded());

app.post('/contact-us', (req, res,next) => {
  console.log(req.body);
  console.log('Form Submitted');
  const { name, email } = req.body;
  res.send(`<h1>Thank you, ${name}. We have received your email address as ${email}.</h1>`);

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
