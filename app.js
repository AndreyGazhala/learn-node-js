const HOST = 'localhost';
const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const path = require('path');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/admin', adminRoutes);

app.use('/users', (req, res) => {
    res.send('<h1>Users route.<h1/>');
});

app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'mainPage.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});