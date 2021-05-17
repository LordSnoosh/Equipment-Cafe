const express = require('express');
const router = express.Router();
const equipmentController= require('../../controllers/api/equipmentController');

const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/equipment
router.post('/', equipmentController.create);

module.exports = router;