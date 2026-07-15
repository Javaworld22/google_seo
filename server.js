const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/overview', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'overview.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/advertisement', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'advertisement.html'));
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});