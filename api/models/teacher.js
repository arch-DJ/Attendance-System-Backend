const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: {"type": String,"required":true, "unique":true},
    password: {"type": String,"required":true},
    name:{"type": String,"required":true},
    department: {"type": String,"required":true},
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true}]
});

module.exports = mongoose.model('Teacher', teacherSchema);
