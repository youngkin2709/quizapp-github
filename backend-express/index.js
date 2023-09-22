const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userController = require('./controller/user')
const cors = require('cors')

const port = 5000
const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/Test');
      console.log('DB connected');
    } catch (err) {
      console.error('Connection error:', err);
    }
  }
  
  connectToDatabase();

app.post('/signup', userController.signup )
app.post('/signin', userController.signin)
app.post('/send-otp', userController.sendotp)
app.post('/submit-otp', userController.submitotp)


connectToDatabase();



app.listen(port, () => {
  console.log(`Backend Running at Port : ${port}`)
})