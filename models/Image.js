const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] 
});

module.exports = mongoose.model('Image', imageSchema);
