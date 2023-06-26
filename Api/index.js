const connectDB = require('./db')
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');


connectDB();

const app = express()
const port = 5000

// to use res.body
app.use(express.json())

app.use(cors());

app.use(cookieParser())



//Available routes
app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))

app.get('/', (req, res) => {
  res.send('This is express')
})

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`)
})
