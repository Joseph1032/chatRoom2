//index.js

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 

io.on('connection', function(socket){
    console.log('Connected... ')

    socket.on('addMessage', function(message){
        io.emit('messageAdded', message)
    })
}) 


server.listen(3001, function(){
    console.log('listening on port 3001')
})