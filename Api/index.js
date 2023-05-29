const connectDB = require('./db')
const express = require('express')

connectDB();


const app = express()
const port = 3000

app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))

app.get('/', (req, res) => {
  res.send('This is express')
})

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`)
})
