const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const homeRouter = require('./routers/homeRouter.js');
const contactsRouter = require('./routers/contactsRouter.js');
const lettersRouter = require('./routers/lettersRouter.js');
const wrongRouteRouter = require('./routers/wrongRouteRouter.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(ejsLayouts);

app.use('/', homeRouter);
app.use('/contacts', contactsRouter);
app.use('/letters', lettersRouter);

app.use('/*', wrongRouteRouter);

module.exports = app;

