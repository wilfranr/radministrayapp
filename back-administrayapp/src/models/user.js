const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: Number,
        unique: true,
        require: true
    },
    id: {
        type: Number,
        unique: true,
        require: true
    },
    bloque: {
        type: String
    },
    apto: {
        type: String
    },
    tel: {
        type: String,
    },
    cel: {
        type: String
    }
})
module.exports = mongoose.model('user', User)
