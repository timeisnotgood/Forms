const express = require("express");
const router = express.Router();
const  { addContact, getContact, getSingleContact }  = require("../controller/contactController");

router.post('/addcontact', addContact);
router.get('/getcontacts', getContact);
router.get('/getcontact/:id', getSingleContact);

module.exports = router;