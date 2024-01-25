const express = require("express")
const { CreateUserCtrl, LoginUserCtrl } = require("../controllers/userCtrl")
const router = express.Router()

router.post("/createUser", CreateUserCtrl)
router.get("/loginUser", LoginUserCtrl)



module.exports = router