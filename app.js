const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const teacherLoginRoute = require('./api/routes/teacherlogin');
const studentLoginRoute = require('./api/routes/studentlogin');
const classRoomInfoRoute = require('./api/routes/classroominfo');
const subjectInfoRoute = require('./api/routes/subjectinfo');
const teacherInfoRoute = require('./api/routes/teacherinfo');
const studentInfoRoute = require('./api/routes/studentinfo');
const ongoingAttendanceRoute = require('./api/routes/ongoing_attendance');
const tempAttendanceRoute = require('./api/routes/tempattendance');
const updateTotalClassRoute = require('./api/routes/update_total_class');
const updateAttendanceRoute = require('./api/routes/update_attendance');
const getStudentsRoute = require('./api/routes/getstudents');
const apRoute = require('./api/routes/accesspoint');

mongoose.connect("mongodb://archdj:10096@ds125469.mlab.com:25469/attendance-app");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes to handle requests
app.use('/teacherlogin', teacherLoginRoute);
app.use('/studentlogin', studentLoginRoute);
app.use('/classroominfo', classRoomInfoRoute);
app.use('/subjectinfo', subjectInfoRoute);
app.use('/teacherinfo', teacherInfoRoute);
app.use('/studentinfo', studentInfoRoute);
app.use('/ongoingattendance', ongoingAttendanceRoute);
app.use('/tempattendance', tempAttendanceRoute);
app.use('/updatetotalclass', updateTotalClassRoute);
app.use('/updateattendance', updateAttendanceRoute);
app.use('/getstudents', getStudentsRoute);
app.use('/accesspoint', apRoute);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app;
