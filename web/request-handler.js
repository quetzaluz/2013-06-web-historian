exports.datadir = __dirname + "/testdata/sites.txt"; // tests will need to override this.
var fs = require('fs');
var http_get = require("http-get");
var http = require("http");
var url = require("url");


exports.handleRequest = function (req, res) {
  console.log("Serving request type " + req.method + " for url " + req.url);
  console.log(exports.datadir);
  var path = url.parse(req.url).path.split('/');
  console.log(req.url);
  switch (req.method) {
    case ('POST'):
      res.writeHead(302);
      console.log(path[0]);
      req.on('data', function (data) {
        fs.writeFileSync(exports.datadir, JSON.stringify(data).slice(5,-1)+"\n", "utf8");
      });
      req.on('end', function () {
        res.end();
      });
      break;
    case('GET'):
      if (path[0] === "" || path[0] === "index.html") {
        var fileStream = fs.readFile('./web/public/index.html', function (err, data) {
          if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
          }
          res.writeHead(200, {'Content-Type':"text/html"});
          res.end(data);
        });
      }
      else {
        console.log("Invalid Path? " + req.url);
        res.writeHead(404);
        res.end();
      }
      break;

  }
};
