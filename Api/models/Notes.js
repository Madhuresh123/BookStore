const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({

    title: {
        type: String,
        default:''
    },
    description: {
        type: String,
        default:'',
    },
    tag: {
        type: String,
        default:''
    },
    date: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model("notes", notesSchema);