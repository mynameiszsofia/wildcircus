
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const circusRoutes = require("./routes/circus.routes");
const ticketRoutes = require("./routes/ticket.routes");

// Connection for Mongoose
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/circus", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("database is connected"))
        .catch(() => console.log(err));
};

connect();

app.use(express.json());

app.use("/circus", circusRoutes);
app.use("/", ticketRoutes);

app.listen(5001, () => {
    console.log("app is running on 5001");
});