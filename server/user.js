
const fs = require('fs');
const { json } = require('stream/consumers');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);
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
        const params = new URLSearchParams(parsedBody);
        // Easy way to convert URLSearchParams to Object
        const objectBody = Object.fromEntries(params);
        // Stander way to convert URLSearchParams to Object
        // const objectBody = {};
        // for (const [key, value] of params.entries()){
        //   objectBody[key] = value;
        // }
        console.log(objectBody);
          fs.writeFileSync('message.txt', JSON.stringify(objectBody));
      });
    
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
   
};
module.exports = requestHandler;

