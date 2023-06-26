
    var express = require('express');
    var router = express.Router();
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const { body, validationResult } = require('express-validator');
    
    const User = require("../models/UserSchema");

    const secret = 'snfwjefksefksrjngfs'
    
    router.get('/', (req, res) => {
      User.find()
        .then((users) => res.json(users))
        .catch((error) => console.log(error));
    });
    
    router.post('/register', [
      body('name', 'Enter a valid name').isLength({ min: 3 }),
      body('email', 'Enter a valid email').isEmail(),
      body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
    ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
      try {
        const { name, email, password } = req.body;
    
        const existingUser = await User.findOne({ name });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = await User.create({
          name,
          email,
          password: hashedPassword
        });
    
        res.json(newUser);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
    router.post('/login', async (req, res) => {
      const { name, password } = req.body;
    
      try {
        const userDoc = await User.findOne({ name });
    
        if (!userDoc) {
          return res.status(400).json({ message: 'User does not exist' });
        }
    
        const passOk = await bcrypt.compare(password, userDoc.password);
    
        if (passOk) {
          const token = jwt.sign({ name, id: userDoc._id }, secret, { expiresIn: '1h' });
    
          res.cookie('token', token).json({ message: 'Login successful' });
        } else {
          res.status(400).json({ message: 'Wrong credentials' });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    router.get('/profile', (req, res) => {
        const token = req.cookies.token;
      
        if (!token) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
      
        jwt.verify(token, secret, (err, info) => {
          if (err) {
            console.log(err);
            return res.status(403).json({ message: 'Invalid token' });
          }
          
          res.json(info);
        });
      });
      
    router.post('/logout',(req,res) => {
        res.cookie('token', '').json({ message: 'Login successful' });
    })
    
    
    module.exports = router;
    