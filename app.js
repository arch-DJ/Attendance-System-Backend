const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const teacherLoginRoutes = require('./api/routes/teacherlogin');

mongoose.connect("mongodb://archdj:10096@ds125469.mlab.com:25469/attendance-app");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes to handle requests
app.use('/teacherlogin', teacherLoginRoutes);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app;
