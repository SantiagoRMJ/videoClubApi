const mongoose = require("mongoose");
const Schema = module.exports = mongoose.Schema;

module.exports.Usersdb = mongoose.model('user', new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    pass:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    }
}))