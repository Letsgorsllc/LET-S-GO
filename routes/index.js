const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Example route
router.get('/example', exampleController.exampleFunction);

module.exports = router;
