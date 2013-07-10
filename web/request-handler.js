exports.datadir = __dirname + "data/sites.txt"; // tests will need to override this.
var fs = require('fs');
var http_get = require("http-get");
var http = require("http");
var url = require("url");

exports.handleRequest = function (req, res) {
  console.log(exports.datadir);
  var path = url.parse(req.url).path.split('/');
  switch (req.method) {
    case ('POST'):
      res.writeHead(302);
      fs.writeFileSync(exports.datadir, path[0]);
      res.end();
      break;
    case('GET'):
      console.log(req.url);
      res.writeHead(200);
      res.end(JSON.stringify(req.data));
      break;
  }
};
