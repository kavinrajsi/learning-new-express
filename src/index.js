const express = require("express");
const student2 = require("./module/students");
const bodyParser = require("body-parser");

const app = express();

// middleware
// app.use((req, res, next) => {
//   // res.send("demo from middlware");
//   next();
// });

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/students", (req, res) => {
  // res.send(student2);
  res.status(200).json({ student2 });
});

app.post("/students", (req, res) => {
  res.send("post data for response");
  console.log(req.body);
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
