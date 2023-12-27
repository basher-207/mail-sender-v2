const express = require('express');
const controller = require('../controllers/homeController.js');
const router = express.Router();

router.route('/')
  .get(controller.renderHomepage)

module.exports = router;