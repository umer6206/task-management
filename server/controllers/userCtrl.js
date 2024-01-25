const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")


dotenv.config()
const CreateUserCtrl = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const ExistingUser = await UserModel.findOne({ email })
        if (ExistingUser) {
            return res.json({ message: "Email Already Exist", success: false })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new UserModel({ name, email, password: hashPassword })
        await newUser.save()
        res.json({ message: "sign Up successfully", success: true, newUser })
    } catch (error) {
        console.log(error.message);
    }
}
const LoginUserCtrl = async (req, res) => {
    try {
        const { email, password } = req.body
        const ExistingUser = await UserModel.findOne({ email })
        if (!ExistingUser) {
            return res.json({ message: "Invalid Email or Password" })
        }
        const isValidPassword = await bcrypt.compare(password, ExistingUser.password)
        if (!isValidPassword) {
            return res.json({ message: "Invalid Email or Password" })
        }
        const token = await jwt.sign({ _id: ExistingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2d" })
        res.json({ message: "Login successfully", success: true, token, email })
    } catch (error) {
        console.log(error.message);
    }
}
const UpdateUserCtrl = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message);
    }
}
const DeleteUserCtrl = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message);
    }
}

const GetSingleUserCtrl = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message);
    }
}
const GetAllUserCtrl = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    CreateUserCtrl,
    LoginUserCtrl
}