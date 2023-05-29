var express = require('express');
var router = express.Router();

const User = require("../models/UserSchema")

router.get('/', (req,res) => {
    res.send('auth')
})

// create a user using: POST "/api/auth/" doesn't require auth
router.post('/', (req,res) => {
    console.log(req.body)
    const user = User(req.body);
    user.save()
    res.send(req.body)

    // res.send('hello')
})


module.exports = router

//app.use('/api/auth', require('./routes/auth'))