const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Image', imageSchema);
