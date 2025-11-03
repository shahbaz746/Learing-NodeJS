const sum = (req, res) => {
     const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const num1 = parseFloat(params.get('num1'));
      const num2 = parseFloat(params.get('num2'));
      const result = num1 + num2;

      // chk if all nums are valid
     if(isNaN(num1) || isNaN(num2)) {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Result</title></head>');
      res.write('<body>');
      res.write(`<h1>Pls enter both numbers</h1>`);
      res.write('<a href="/calculator">Back to Calculator</a>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    }else{
      // ✅ Send result to the browser
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Result</title></head>');
      res.write('<body>');
      res.write(`<h1>Result: ${num1} + ${num2} = ${result}</h1>`);
      res.write('<a href="/calculator">Back to Calculator</a>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    }
      });
}
module.exports = sum;