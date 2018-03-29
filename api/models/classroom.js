const mongoose = require('mongoose');

const classroomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    class_name: {"type": String,"required":true, "unique":true},
    coordinates: [{
      x : Number,
      y : Number
     }],
    z_coordinate:{"type": Number, "required":true},
    height:{"type": Number,"required":true}
});

module.exports = mongoose.model('Classroom', classroomSchema);
