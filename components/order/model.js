const mongoose = require("mongoose");
const Schema = module.exports = mongoose.Schema;

module.exports = mongoose.model('Order', new Schema({
    user_id:{
        type: mongoose.Types.ObjectId, ref: 'User',
        required: true
    },
    movie_id:{
        type: mongoose.Types.ObjectId, ref: 'Movie',
        required: true
    },
    createDate:{
        type: Date,
        default: Date
    },
    returnDate:{
        type: Date,
        default: Date + 20
    }
}))