const connectDB = require('./db')
const express = require('express')

connectDB();


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
