import React, { Component} from 'react';
// import PropTypes from 'prop-types';
import { 
  //  BrowserRouter as Router, 
  Route,
  Switch,
} from 'react-router-dom';

import About from '../about/About';
import Contact from '../contact/Contact';
import Post from '../post/Post';
import Login from '../login/Login';
import Register from '../register/Register';
import NotFound from '../notfound/NotFound';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
};

class AppRoute extends Component {
  render() {
    const { setAuthenticatedUser } = this.props;
    return (
      <Switch>
        <Route exact path='/' component={ Post } />
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
        <PropsRoute path='/login' component={ Login } setAuthenticatedUser={ setAuthenticatedUser } />
        <PropsRoute path='/register' component={ Register } setAuthenticatedUser={setAuthenticatedUser }/>
        <Route component={ NotFound } /> 
      </Switch>
    );
  }
}

export default AppRoute;
