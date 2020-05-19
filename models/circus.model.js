const mongoose = require("mongoose");

const circusSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: String
    }

});

const CircusSchema = mongoose.model("circusSchema", circusSchema);
module.exports = CircusSchema;