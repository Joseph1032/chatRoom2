import store from '../store'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}

export function addMessage(message) {
    socket.emit('message added', message)
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
}

socket.on('messageAdded', function(message){
     addMessage(message)
})