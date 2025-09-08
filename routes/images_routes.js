const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/images_controller');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', imagesController.getAllImages);
router.post('/', authMiddleware, imagesController.createImage);
router.delete('/:id', authMiddleware, imagesController.deleteImage);

module.exports = router;
