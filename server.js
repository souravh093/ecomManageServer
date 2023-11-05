const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "souravMa1998",
  database: "newdb",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected DB.");
  }
});

app.post("/post", (req, res) => {
  const name = req.body.name;
  const id = req.body.id;
  const mark = req.body.mark;

  con.query(
    "insert into mytable values(?, ?, ?)",
    [id, name, mark],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted.");
      }
    }
  );
});

app.listen(5000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server running on port 5000");
    }
  });
