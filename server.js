const express = require("express");
const mongoose = require("mongoose");
const app = express();
const circusRoutes = require("./routes/circus.routes");
const path = require("path");
require("dotenv").config();

const uri = process.env.mongoURI || "mongodb://localhost:27017/circus";
// Connection for Mongoose
const connect = () => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database is connected"))
    .catch((err) => console.log(err));
};

connect();

app.use(express.json());

app.use("/circus", circusRoutes);

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

var port = process.env.PORT;
/* var port = 5000; */
app.listen(port, "0.0.0.0", () => {
  console.log(`app is running on ${port}`);
});
/* app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
 */