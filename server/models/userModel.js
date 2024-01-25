const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    googleId: {
        type: String
    }
}, { timestamps: true })


const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel