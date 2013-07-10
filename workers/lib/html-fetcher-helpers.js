exports.readUrls = function(filePath, cb){
  if (filePath.length) {
    for (var i = 0; i < filePath.length; i++) {
      cb(filePath[i]);
    }
  }
};

    // var urlArray = ["example1.com", "example2.com"];

    // fs.writeFileSync(__dirname + "/testdata/sites.txt", urlArray.join("\n"));

    // var resultArray = [];
    // var result = htmlFetcherHelpers.readUrls(urlArray, function(urls){
    //   resultArray.push(urls);
    // });


exports.downloadUrls = function(urls){
  // fixme
};