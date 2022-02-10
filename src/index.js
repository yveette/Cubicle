const express = require('express');
const path = require('path');

const initHandlebars = require('./config/handlebars');

const app = express();
initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));