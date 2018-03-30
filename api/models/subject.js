const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: {"type": String,"required":true},
    sub_name: {"type": String,"required":true},
    semester:{"type": Number,"required":true},
    branch: {"type": String,"required":true},
    total_classes: {"type": Number, "default":0},
    room: {"type":mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true}
});

module.exports = mongoose.model('Subject', subjectSchema);
