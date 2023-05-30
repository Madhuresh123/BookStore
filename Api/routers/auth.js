var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');


const User = require("../models/UserSchema")

router.get('/', (req,res) => {
    res.send('auth')
})

// create a user using: POST "/api/auth/" doesn't require auth
router.post('/', [

    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5})

] ,(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => res.json(user)).catch(err => {console.log(err)
    res.json({ error: 'Please enter a unique value for email'})})

    // console.log(req.body)
    // const user = User(req.body);
    // user.save()
    // res.send(req.body)

    // res.send('hello')
})


module.exports = router

//app.use('/api/auth', require('./routes/auth'))