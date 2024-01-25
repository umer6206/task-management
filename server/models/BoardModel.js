const mongoose = require("mongoose")
const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})
const listSchema = new mongoose.Schema({
    title: String,
    cards: [cardSchema],
});

const boardSchema = new mongoose.Schema({
    title: String,
    ownerId: String,
    bgColor: String,
    lists: [listSchema],
});

module.exports = mongoose.model('boards', boardSchema);