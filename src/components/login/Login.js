import React, { Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Grid, Message, Input } from 'semantic-ui-react';
import { saveUserData } from '../../authentication';
import LoginMutation from '../../mutations/LoginMutation'; 

class Login extends Component {
  state ={
    email: '',
    password: '',
    error: {
      field: '',
      message: '',
    },
  };

  handleFieldChange = (e, {name, value}) => this.setState({
    [name]: value
  });

  loginComplete = (userData) => {
    // console.log(userData);
    const { setAuthenticatedUser } =  this.props;
    saveUserData(userData);
    setAuthenticatedUser(userData.user);
    this.setState({
      redirect: true,
    });
  };

  loginError = (errors) => {
    console.log(errors);
    this.setState({
      error: {
        field: 'unspecified',
        message: errors[0].message,
      }
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const variables = {
      user: {
        email,
        password,
      }
    };
    LoginMutation(variables, this.loginComplete, this.loginError);
  };

  render() {
    const { error } = this.state;
    console.log(this.state.email);

    if (this.state.redirect)
      return <Redirect to='/' />

    return (
      <div>
        <h1 className='center'>Login</h1>
        <Grid centered doubling columns={2}>
          <Grid.Column>
            <Form onSubmit={ this.handleSubmit } error= {this.state.error.field !== ''} >
              { error.field === 'unspecified' 
                && <Message 
                  error
                  header='Registration failed'
                  content={ this.state.error.message }
                />} 
              <Form.Field>
                <label>Email</label>
                <Input required type='email' name='email' placeholder='Enter email' onChange={ this.handleFieldChange } />
              </Form.Field>
              <Form.Field error={ error.field === 'password'} >
                <label>Password</label>
                <Input required name='password' type='password' placeholder='Password' onChange={ this.handleFieldChange } />
                { error.field === 'password' && <label>{ error.message }</label> }
              </Form.Field>
              <Form.Button content='Login' basic color='green' />
            </Form>
            <p>Not have an account? <Link to='/register'>Sign up now</Link></p>
          </Grid.Column>
        </Grid>
      </div>
    );

  }
}

export default Login;
