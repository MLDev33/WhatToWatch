require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

require('./models/connection');
require('./models/users');
require('./models/media');
require('./models/movielists');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./routes/movies');
const movielistsRouter = require('./routes/movielists');
const genresRouter = require('./routes/genres');
const providersRouter = require('./routes/providers');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', movieRouter);
app.use('/movielists', movielistsRouter);
app.use('/genres', genresRouter);
app.use('/providers', providersRouter);

module.exports = app;
