const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Foam Page</h1>');
    res.write('<form action="/message" method="POST">');
    res.write('<label for="username">Username</label>');
    res.write('<input type="text" id="username" name="username" placeholder="Enter your name"/>');
    res.write('<label for="Male">Male</label>');
    res.write('<input type="radio" id="Male" name= "gender" value="Male"/>');
    res.write('<label for="Femal">Femal</label>');
    res.write('<input type="radio" id="Femal" name= "gender" value="Femal"/>');
    res.write(' <button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }
    else if (req.url === '/message' && req.method === 'POST') {
      const body = [];
      req.on('data',chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
      });
      fs.writeFileSync('message.txt', 'shahbaz');
      res.statusCode = 302;
      res.setHeader('Location', '/');
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