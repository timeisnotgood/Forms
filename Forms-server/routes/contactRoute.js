const express = require("express");
const router = express.Router();
const  { addContact, getContact, getSingleContact, updateContact, deleteContact }  = require("../controller/contactController");

router.post('/addcontact', addContact);
router.get('/getcontacts', getContact);
router.get('/getcontact/:id', getSingleContact);
router.put('/updatecontact/:id', updateContact);
router.delete('/deletecontact/:id', deleteContact)

module.exports = router;