var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.json([
        {
            name:'notes'
        }
    ])
})

module.exports = router

//app.use('/api/notes', require('./routes/notes'))