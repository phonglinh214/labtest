const http = require('http');
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>new code here</h1>");
    res.write("<h1>new code here</h1>");
    res.end("<h1>Heroku deployment tutorial</h1>");
  })
  .listen(process.env.PORT || 5000);