const mongoose = require("mongoose")

const DBCon = async () => {
    try {
        const response = await mongoose.connect('mongodb://127.0.0.1:27017/taskmanagement')
        if (response) {
            console.log("connected");
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = DBCon