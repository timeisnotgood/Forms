const express = require("express");
const router = express.Router();
const  addContact  = require("../controller/contactController");

router.post('/addcontact', addContact);

module.exports = router;