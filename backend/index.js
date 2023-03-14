const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const router = require("./router/router");
const connectMySQL = require("./db");
const app = express();

require("dotenv").config();

app.use(cors());

connectMySQL();

app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started!");
});
