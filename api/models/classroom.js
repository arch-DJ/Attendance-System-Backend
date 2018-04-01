const mongoose = require('mongoose');

const classroomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    class_name: {"type": String,"required":true, "unique":true},
    xmin:{"type": Number,"required":true},
    xmax:{"type": Number,"required":true},
    ymin:{"type": Number,"required":true},
    ymax:{"type": Number,"required":true},
    zmin:{"type": Number,"required":true},
    zmax:{"type": Number,"required":true}
});

module.exports = mongoose.model('Classroom', classroomSchema);
