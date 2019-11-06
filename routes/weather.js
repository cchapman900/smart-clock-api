const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const test = {test: 'testing'}
  res.send(JSON.stringify(test));
});

module.exports = router;
