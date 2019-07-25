import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Form from './form'
import ThankYou from './thankyou'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Form} />
          <Route path="/thankyou" component={ThankYou} />
        </div>
      </Router>
    )
  }
}

export default App

