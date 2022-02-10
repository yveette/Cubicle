const handlebars = require('express-handlebars');
const path = require('path');

const initHandlebars = (app) => {
    app.set('views', path.resolve(__dirname, '../views'));
    app.engine('hbs', handlebars.create({
        extname: 'hbs'
    }).engine);
    app.set('view engine', 'hbs');
};

module.exports = initHandlebars;