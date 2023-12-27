const express = require('express');
const router = express.Router();

router.use((req, res) => {
  res.send('page not found');
});

module.exports = router;