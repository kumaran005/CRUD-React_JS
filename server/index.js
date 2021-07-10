const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "CRUD",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sql = `select * from CRUD.movie`;
  db.query(sql, (err, data) => {
    // console.table(data);
    res.send(data);
  });
});

app.post("/api/insert", (req, res) => {
  const { movieName, movieReview, movieRating } = req.body;

  var sql = `insert into CRUD.movie (movieName,movieReview,movieRating) values (?,?,?)`;
  db.query(sql, [movieName, movieReview, movieRating], (err, data) => {
    console.log(data);
  });
});

app.listen(2000, () => {
  console.log("http://localhost:2000");
});

//https://cra.link/deployment
