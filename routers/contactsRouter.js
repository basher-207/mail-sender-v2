const express = require('express');
const controller = require('../controllers/contactsController.js');
const router = express.Router();

router.route('/')
  .get(controller.renderContacts)

module.exports = router;