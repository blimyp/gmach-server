const Order = require('../models/Order');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .sort({ orderDate: -1 })
            .populate('userId', 'name email'); // מציג רק את השדות הרצויים מהמשתמש

        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const {
            customerName,
            customerPhone,
            customerMail,
            orderDate,
            orderDescription,
        } = req.body;

        const newOrder = new Order({
            customerName,
            customerPhone,
            customerMail,
            orderDate,
            orderDescription,
            userId: req.user._id,
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.id }).populate('userId', 'name email');

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({ orderId: req.params.id });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
