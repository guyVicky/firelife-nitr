const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/mode", (req, res) => {
  res.sendFile(__dirname + "/public/mode.html");
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
