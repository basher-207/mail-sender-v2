const express = require('express');
const controller = require('../controllers/lettersController.js');
const router = express.Router();

router.route('/')
  .get(controller.renderLetters)

module.exports = router;