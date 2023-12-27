const express = require('express');
const controller = require('../controllers/receiversController.js');
const router = express.Router();

router.route('/')
  .get(controller.renderReceivers)

module.exports = router;