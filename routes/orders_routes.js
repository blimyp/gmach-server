const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders_controller');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, ordersController.getAllOrders);
router.post('/createOrder', authMiddleware, ordersController.createOrder);
router.delete('/:id', authMiddleware, ordersController.deleteOrder);
router.get('/:id', authMiddleware, ordersController.getOrderById);

module.exports = router;
