const mongoose = require('mongoose');

const ongoingAttendanceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject:  {"type":mongoose.Schema.Types.ObjectId, ref: 'Subject', unique: true, required: true}
});

module.exports = mongoose.model('OngoingAttendance', ongoingAttendanceSchema);
