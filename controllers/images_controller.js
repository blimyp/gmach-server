const Image = require('../models/Image');

// קבלת כל התמונות
exports.getAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// הוספת תמונה חדשה
exports.createImage = async (req, res) => {
    try {
        const newImage = new Image(req.body);
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// מחיקת תמונה לפי ID
exports.deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        await Image.findByIdAndDelete(id);
        res.json({ message: 'תמונה נמחקה בהצלחה' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// פונקציה לעדכון לייק
exports.toggleLike = async (req, res) => {
    try {
        const { imageId, userId, like } = req.body;

        if (!imageId || !userId || like === undefined) {
            return res.status(400).json({ message: 'Missing parameters' });
        }

        let update;
        if (like) {
            update = { $addToSet: { likedBy: userId } };
        } else {
            update = { $pull: { likedBy: userId } };
        }

        const updatedImage = await Image.findByIdAndUpdate(
            imageId,
            update,
            { new: true }
        );

        if (!updatedImage) return res.status(404).json({ message: 'Image not found' });

        res.json(updatedImage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

