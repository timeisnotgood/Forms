const express = require("express");
const router = express.Router();
const  { addContact, getContact }  = require("../controller/contactController");

router.post('/addcontact', addContact);
router.get('/getcontact', getContact);

module.exports = router;