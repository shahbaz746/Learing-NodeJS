const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Wellcome to my home!</h1></body>');
    res.write('</html>');
    return res.end();
    } else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Checkout prodcts</h1></body>');
    res.write('</html>');
    return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>This was an error 404!</h1></body>');
    res.write('</html>');
    res.end();
   
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});