const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'adminPage.html'));
});

router.post('/add_employee', (req, res) => {
    res.send('Admin add new employee page');
});

module.exports = router;