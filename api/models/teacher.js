const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: {"type": String,"required":true,"unique":true},
    password: {"type": String,"required":true},
    name: String,
    department: String,
    subjects: [String]
});

module.exports = mongoose.model('Teacher', teacherSchema);
