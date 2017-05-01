//index.html

import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import '../assets/styles/Chatroom.css';
import 'font-awesome/css/font-awesome.css'
import { connect } from 'react-redux'
import moment from 'moment'
import {addMessage} from '../api/messaging'


class Chatroom extends Component {
    constructor() {
        super() 
        this.state = {
            message: '',
            color: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            username: this.props.username,
            timestamp: moment().format('LTS'),
            message: this.state.message,
            color: this.state.color
        })
        this.setState({
            message:''
        })
    }

    ComponentWillMount() {
        if (!this.props.username) {
            this.props.history.push('/')
        }
    }
    render() {
        return(
           <div className='container'>
               <h1>Express Chat</h1>
               <div id='messageBox'>
                   <ul id='messages'>
                       {this.props.messages.map((msg) => (
                       <li style={{listStyle:'none'}}>
                            <div>
                                 <Avatar style={{textAlign:'center'}}> {msg.username.charAt(0).toUpperCase()}</Avatar> 
                            </div>    
                            <div id='time'><span id='username'>{msg.username}</span> {msg.timestamp}</div> 
                            <div className='theirMessages'>{msg.message}</div>          
                        </li>
                       ))}
                   </ul>
               </div>
               <div  id='chatBox'>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type='text' id='typeHere' name='message' value={this.state.message} />
                        <input id='colorWheel' onChange={this.handleChange} type='color' name='color' value={this.state.color}/>
                    </form>
               </div>
           </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        messages: appState.messages,
        username: appState.username
    }
}

export default connect(mapStateToProps)(Chatroom)