import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Chatroom from './Chatroom'
import SignIn from './SignIn'


class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact={true} path="/" component={SignIn} />
          <Route path="/chatroom" component={Chatroom} />
        </div>
      </Router>
    )
  }  
}

export default App