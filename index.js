const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();
const mongoose = require('mongoose');

const ordersRoutes = require('./routes/orders_routes');

app.use(express.json());
app.use('/api/orders', ordersRoutes);

console.log("Mongo URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
