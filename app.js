//
//
//
const express = require('express')

const CF = require('./config')

var app = express()

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.json())

app.use('/api/test', require('./api/test'))


function errorHandler(err, req, res, next) {
    if (err)
        res.send('<h2>Error detected ... please try again</h2>')
}

// put this in the last
// if errror occured, the program will jump to the last section : errorHandler
app.use(errorHandler)


app.listen(CF.port, () => {
    console.log('... ' + CF.appName +' server started, listening to port: ' + CF.port.toString())
})
