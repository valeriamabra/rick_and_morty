const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

const server = express();
const PORT = 3001;

server.use(morgan("dev"));

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
server.use(cors());

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

// var http = require("http");

// var data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");

// if (req.url.includes("/rickandmorty/character")) {
//   console.log("asdasd");
//   var urlArray = req.url.split("/");
//   var id = urlArray[3];
//   var result = data.find((item) => item.id.toString() === id);

//   if (result) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(result));
//   }

//   res.writeHead(404, { "Content-Type": "text/plain" });
//   return res.end("character not found");
// }
//   const { url } = req;

//   if (req.url.includes("/rickandmorty/character")) {
//     const id = url.split("/").pop();
//     getCharById(res, id);
//   }
// })
// .listen(3001);
