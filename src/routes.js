const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const router = express.Router();

router.all('/', (req, res) => {
    res.render('index');
});

router.use(homeController);
router.use('/cube', cubeController);

module.exports = router;