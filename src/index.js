const express = require('express');
const initHandlebars = require('./config/handlebars');

const app = express();
initHandlebars(app);

app.all('/', (req, res) => {
    res.render('index', { layout: false });
});

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));