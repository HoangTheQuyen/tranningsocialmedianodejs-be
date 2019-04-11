const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user')
const app = express()



mongoose.connect('mongodb://localhost/tranningsocialmedia', {
  useNewUrlParser: true
})
.then(() =>{
  console.log('CONNECTED')
})
.catch(err =>{
  console.log('CONNECT FAIL')
})


let user = new User({
  email:"HoangTheQuyen@gmail.com",
  password:"123456789"
})

user
.save()
.then(() =>{
  console.log('SUCCESSFULLY')
})
.catch(err =>{
  console.log(err);
  console.log('FAIL')
})


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)