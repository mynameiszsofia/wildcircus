const mongoose = require("mongoose");

const TickSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  ticket: {
    type: String,
  },
});

const circusSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  tickets: [TickSchema],
});

const CircusSchema = mongoose.model("circusSchema", circusSchema);
module.exports = CircusSchema;
