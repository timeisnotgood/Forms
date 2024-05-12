const express = require("express")
const router = express.Router();
const { userSignup, userLogin } = require("../controller/userController")

router.post('/adduser', userSignup);
router.post('/getuser', userLogin);

module.exports = router;