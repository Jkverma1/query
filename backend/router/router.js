const express = require("express");
const connectMySQL = require("../db");
const mysql = require("mysql");

const router = express.Router();

router.get("/query", (req,res) => {
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "queryApp",
  });
  conn.query("SELECT * from query", function (err, result) {
    if (err) {
      console.log("DB Connection Failed");
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
