const express = require('express');
const router = express.Router();
const controller = require('./pokemon.controller');

router.get('/', controller.getAll);

module.exports = router;