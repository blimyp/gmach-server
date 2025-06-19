const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();
const mongoose = require('mongoose');

const ordersRoutes = require('./routes/orders_routes');
const usersRoutes = require('./routes/users_routes');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
app.use('/api/orders', ordersRoutes);
app.use('/api/users', usersRoutes);

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
