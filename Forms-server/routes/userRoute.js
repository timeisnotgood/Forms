const express = require("express")
const router = express.Router();
const { userSignup, userLogin } = require("../controller/userController")

router.post('/postuser', userSignup);
router.get('/getuser', userLogin);

module.exports = router;