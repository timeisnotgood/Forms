const express = require("express");
const router = express.Router();
const  { addContact, getContact, getSingleContact, updateContact }  = require("../controller/contactController");

router.post('/addcontact', addContact);
router.get('/getcontacts', getContact);
router.get('/getcontact/:id', getSingleContact);
router.put('/updatecontact/:id', updateContact);

module.exports = router;