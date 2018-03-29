const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: {"type": String,"required":true, "unique":true},
    password: {"type": String,"required":true},
    name:{"type": String,"required":true},
    roll:{"type": String,"required":true},
    branch: {"type": String,"required":true},
    semester: {"type": Number, "required":true},
    subjects: [{subject: {type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true},
              attendance: {"type": Number, "default":0}}]
});

module.exports = mongoose.model('Student', studentSchema);
