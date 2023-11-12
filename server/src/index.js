var http = require("http");
var data = require("./utils/data");

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      console.log("asdasd");
      var urlArray = req.url.split("/");
      var id = urlArray[3];
      var result = data.find((item) => item.id.toString() === id);

      if (result) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(result));
      }

      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("character not found");
    }
  })
  .listen(3001);
