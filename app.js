const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

//import routes
const postsRoutes = require('./posts')


//middleware
app.use(bodyParser.json())
app.use('/posts',postsRoutes)

//Routes
app.get('/',(req,res) => {
    res.send('home')
})



//connect to db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true , useUnifiedTopology: true},
    console.log('connected to DB'))

//Listten to server
app.listen(3000)

//
