const mongoose = require('mongoose');

const apSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    ssid : {"type": String, "required":true},
    bssid : {"type": String, "required":true, "unique":true},
    x : {"type": Number, "required":true},
    y : {"type": Number, "required":true},
    z : {"type": Number, "required":true}
});

module.exports = mongoose.model('AccessPoint', apSchema);
