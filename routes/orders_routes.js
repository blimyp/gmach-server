const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders_controller');

router.get('/', ordersController.getAllOrders);
router.post('/', ordersController.createOrder);
router.get('/:id', ordersController.getOrderById);

module.exports = router;
