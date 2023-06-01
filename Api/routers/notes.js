var express = require('express');
var router = express.Router();

const Notes = require("../models/Notes")


// get all notes visible
router.get('/', (req,res) => {
    Notes.find()
    .then((notes) => res.json(notes))
    .catch((error) => console.log(error));
})

// create or store new notes
router.post('/', (req,res) => {

    Notes.create({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag
    }).then( note => res.json(note)).catch(error => console.log(error))
    
})

// update note data by their id
router.patch('/updatenote/:id', async (req, res) => {
    try{

        let note = await Notes.findById(req.params.id)
        if(!note) {return res.status(404).send('Not found')}

        note = await Notes.findByIdAndUpdate(req.params.id, req.body, {new:true })
        res.json({'Success' : "Note has been updated", note: note})


    }
    catch (error){
        console.error(error.message)
        res.status(500).send('Internal Server Error')
    }
})
 

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})










module.exports = router

//app.use('/api/notes', require('./routes/notes'))