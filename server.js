var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

const reEndsWithMJS = /\.mjs$/;
const PORT = 4000;

http.createServer(function (req, res) {
  const relativePath = `.${req.url}`;
  const isIndex = (req.url === '/' || req.url === '/index.html');
  const isModule = (reEndsWithMJS.test(req.url) && fs.existsSync(relativePath));
  if (isIndex) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  } else if (isModule) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.end(fs.readFileSync(relativePath))
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
}).listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });
