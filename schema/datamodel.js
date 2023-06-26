const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    name: String,
    img: String
});

module.exports = mongoose.model("cards", cardSchema);