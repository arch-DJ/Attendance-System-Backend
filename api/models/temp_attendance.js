const mongoose = require('mongoose');

const tempAttendanceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject:  {"type":mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true},
    student:  {"type":mongoose.Schema.Types.ObjectId, ref: 'Student', unique: true, required: true}
});

module.exports = mongoose.model('TempAttendance', tempAttendanceSchema);
