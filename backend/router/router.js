const express = require("express");
const connectMySQL = require("../db");
const mysql = require("mysql");

const router = express.Router();

router.get("/query/:id", (req, res) => {
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "queryApp",
  });
  let id = req.params.id;
  console.log(id);
  conn.query(`SELECT * from query where query LIKE '%${id}%'`, function (err, result) {
    if (err) {
      console.log("DB Connection Failed");
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
