const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const initDb = require("./database/initDb");
const port = process.env.PORT || 5000;
//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//Database Initialization
initDb();
//User Routes
const Users = require("./routes/Users");
app.use("/users", Users);
app.listen(port, function() {
  console.log("Server is running on port: " + port);
});
