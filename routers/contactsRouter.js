const express = require('express');
const controller = require('../controllers/contactsController.js');
const router = express.Router();

router.route('/')
  .get(controller.renderContacts)

router.route('/add')
  .get(controller.renderAddContact)
  .post(controller.addContact)

router.route('/:id/edit')
  .get(controller.renderContactEdit)

router.route('/:id/delete')
  .post(controller.deleteContact)

module.exports = router;