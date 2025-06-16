const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
require('dotenv').config(); // אם את מריצה מקומית

const ordersRoutes = require('./routes/orders_routes');

app.use(express.json());

app.use('/api/orders', ordersRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
