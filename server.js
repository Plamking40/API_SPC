const express = require("express");
const app = express();

/// json object >> js object
app.use(express.json());

app.listen(3000, () => console.log("Server listening on port 3000"));

/// Mysql Connection
const db = require("./DB/db");

db.connect((err) => {
  if (err) {
    console.log("Error connecting to Mysql server =", err);
    return;
  }
  console.log("MySQL Successfully Connected !!");
});

/// Mysql Connection

/// Router ///
const sequesterRouter = require("./routers/sequester_router");

app.use("/sequester", sequesterRouter);
/// Router ///
