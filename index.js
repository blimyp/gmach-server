const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('השרת רץ כמו שצריך!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'שלום מהשרת' });
});

app.post('/api/send', (req, res) => {
    console.log('נתונים שהתקבלו:', req.body);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`שרת פועל על http://localhost:${PORT}`);
});
