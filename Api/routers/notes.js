var express = require('express');
var router = express.Router();

const Notes = require("../models/Notes")


router.get('/', (req,res) => {
    res.send('notes')
})

router.post('/', (req,res) => {

    Notes.create({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag
    }).then( note => res.json(note)).catch(error => console.log(error))
    
})

module.exports = router

//app.use('/api/notes', require('./routes/notes'))