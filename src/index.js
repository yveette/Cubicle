const express = require('express');
const path = require('path');
const routes = require('./routes');

const initHandlebars = require('./config/handlebars');

const app = express();

// get req.body in right format
app.use(express.urlencoded({ extended: true }));

initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));