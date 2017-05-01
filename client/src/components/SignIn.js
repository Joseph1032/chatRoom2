import React, { Component } from 'react'
import {login} from '../api/messaging'

class SignIn extends Component {
     constructor() {
        super() 
        this.state = {
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username)
        this.props.history.push("/chatroom")
    }
        
    render() {
        return(
            <div id='body'> 
                <div id="userFormArea">
                    <form onSubmit={this.handleSubmit} id="userForm">
                        <label>Sign In</label>
                        <input type='text' onChange={this.handleChange} placeholder='Username' name='username'/><br />
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn