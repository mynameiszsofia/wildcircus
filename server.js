const express = require("express");
const mongoose = require("mongoose");
const app = express();
const circusRoutes = require("./routes/circus.routes");
const ticketRoutes = require("./routes/ticket.routes");
const path = require("path");
require("dotenv").config();

const uri = process.env.ATLAS_URI || "mongodb://localhost:27017/circus";
// Connection for Mongoose
const connect = () => {
  return mongoose
    .connect("uri", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database is connected"))
    .catch(() => console.log(err));
};

connect();

app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/circus", circusRoutes);
app.use("/", ticketRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("app is running on 5000");
});
