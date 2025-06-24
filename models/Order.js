const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderId: {
        type: Number,
        unique: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
    orderDescription: {
        type: String,
        required: true,
    },
});

orderSchema.pre('validate', async function (next) {
    if (this.isNew) {
        const lastOrder = await mongoose.model('Order').findOne().sort({ orderId: -1 });
        this.orderId = lastOrder ? lastOrder.orderId + 1 : 1;
    }
    next();
});

module.exports = mongoose.model('Order', orderSchema);
