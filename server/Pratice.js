const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<nav>");
    res.write('<a href="/">Home</a> | ');
    res.write('<a href="/Men">Men</a> | ');
    res.write('<a href="/Woman">Woman</a> | ');
    res.write('<a href="/Woman">Kids</a> | ');
    res.write('<a href="/Woman">Cart</a> | ');
    res.write("</nav>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Men") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to Men Page</h1>");
    res.write("<script>");
    res.write('setTimeout(() => { window.location.href = "/"; }, 10000);');
    res.write("</script>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Woman") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to Woman Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Kids") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to Kids Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Cart") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to Cart Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>This was an error 404!</h1></body>");
  res.write("</html>");
  res.end();
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
