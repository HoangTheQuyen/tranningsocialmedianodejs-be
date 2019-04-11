var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
    name: String,
    phone: Number,
    dateOfBirth: Date,
    sex: Boolean,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: Date
});


module.exports = mongoose.model('User', UserSchema);
