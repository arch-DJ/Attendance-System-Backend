const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: {"type": String,"required":true, "unique":true},
    sub_name: {"type": String,"required":true},
    semester:{"type": Number,"required":true},
    branch: {"type": String,"required":true},
    room: {"type":mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true}
});

module.exports = mongoose.model('Subject', subjectSchema);
