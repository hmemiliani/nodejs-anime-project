const express = require('express');
const router = express.Router();
const studioController = require('../controllers/studioController');

router.post('/', studioController.createStudio);
router.get('/', studioController.getAllStudios);
router.get('/:id', studioController.getStudioById);
router.put('/:id', studioController.updateStudio);
router.delete('/:id', studioController.deleteStudio);

module.exports = router;
