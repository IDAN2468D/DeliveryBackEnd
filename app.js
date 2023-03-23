const express = require("express");
const path = require("path");
const http = require("http");

require("./db/mongoConnect");

const { routesInit } = require("./routes/config_route")

const app = express();
app.use(express.json());

routesInit(app);

const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port);