var util  = require('util'),
    spawn = require('child_process').spawn;
//    ls    = spawn('/bin/bash', ['crun.sh']);

var http = require("http");

var server = http.createServer(function(req, res) {
  var proc = spawn("/bin/bash", ["crun.sh"]);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE html>");
  res.write("<html lang=\"en\">");
  res.write("<head>");
  res.write("  <title>Watchdog</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("Watchdog");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(8022);
console.log("Listening 8022");
