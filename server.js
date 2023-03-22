require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {initRoutes} = require('./routes/index')

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
initRoutes(app)

// Connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database")
        //Listen to port
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })