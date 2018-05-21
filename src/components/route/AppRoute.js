import React, { Component} from 'react';
// import PropTypes from 'prop-types';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom';

import About from '../about/About';
import Contact from '../contact/Contact';
import Post from '../post/Post';
import Navbar from '../navbar/Navbar';

class AppRoute extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div>
          <Route component={Navbar} />
        <Switch>
          <Route exact path='/' component={ Post } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRoute;
