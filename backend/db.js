const mysql = require("mysql");

const connectMySQL = () => {
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
      console.log("DB Connection established!");
      return result;
    }
  });
};

module.exports = connectMySQL;
