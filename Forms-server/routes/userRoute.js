const express = require("express")
const router = express.Router();
const { userSignup } = require("../controller/userController")

router.post('/getuser', userSignup);

module.exports = router;