const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        default:''
    },
    description: {
        type: String,
        default:'',
        required: true,
    },
    tag: {
        type: String,
        required: true,
        default:''
    },
    date: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model("notes", notesSchema);