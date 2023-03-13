const express = require("express");
const fileUpload = require("express-fileupload");
const http = require("http");
const { Server } = require("socket.io");
const servEnviv2 = require("./controllers/EnviDemov2");
const fs = require("fs");
var path = require("path");

require("dotenv").config();

// Controllers

const { EnviDemo } = require("./controllers/enveronment");

const enviv2 = EnviDemo();

// Init expess
const app = express();
const server = http.createServer(app);

// Middlewares[Function: toAbsoluteUrl]
app.use(express.json());
app.use(fileUpload());

const cors = require("cors");
app.use(cors());

// authorise CROS[Function: toAbsoluteUrl]
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // X-Token-Auth
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});


 
// Routes Folder
const environement = require("./routes/environment");
// const auth = require("./routes/auth");
const user = require("./routes/user");
const platforme = require("./routes/platforme");
// const auth = require("./auth")
function isAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'password') {
    next();
  } else {
    res.status(401);
    res.send('Access forbidden');
  }
}
// router
app.use("/api/", environement);
// app.use("/auth", auth);
app.use("/api/user/", user);
app.use("/api/platforme/", platforme);
// app.use(auth)


// End V1
app.get("/", function (req, res) {
  res.send();
});

app.get("*", function (req, res) {
  res.status(404).send({ error: "Not found" });
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// io.on("connection", (socket) => servEnvi(socket,envi));



io.on("connection", (socket) => {

  enviv2.map((ev) => servEnviv2(socket, ev));
});

// Start Server
const port = process.env.PORT;
server.listen(port);
console.log(`server listening on ${port}`);
