const fs = require('fs');
const sumRequest = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body><h1>Welcome to the Page</h1>');
    res.write('<h2>Open calculator <a href="/calculator">click here</a></h2>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body><h1>Calculator Page</h1>');
    res.write('<form action="/calculate-result" method="POST">'); // ✅ send to /calculate-result
    res.write('<label for="num1">Number 1</label>');
    res.write('<input type="number" id="num1" name="num1" placeholder="Enter first number"/><br><br>');
    res.write('<label for="num2">Number 2</label>');
    res.write('<input type="number" id="num2" name="num2" placeholder="Enter second number"/><br><br>');
    res.write('<button type="submit">Calculate</button>'); // ✅ real submit button
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url === '/calculate-result' && req.method === 'POST') {
   return sumRequest(req, res);
    
  }
};

module.exports = requestHandler;
