const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        default:''
    },
    email: {
        type: String,
        default:'',
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        default:''
    },
    date: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model("userSchema", userSchema);