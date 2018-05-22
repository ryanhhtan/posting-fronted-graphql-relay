import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRoute from '../route/AppRoute';
import Navbar from '../navbar/Navbar';
import { getUser, removeUserData } from '../../authentication';

class App extends Component {
  state = {
    user: getUser(),
  };

  logout = () => {
    removeUserData();
    this.setState({
      user: null,
    });
  };

  setAuthenticatedUser = (newUser) => {
    this.setState({
      user: newUser, 
    });
  } 

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar user={ user } logout={ this.logout }/>
            <AppRoute setAuthenticatedUser={ this.setAuthenticatedUser }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
