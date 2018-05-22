import React, { Component} from 'react';
// import PropTypes from 'prop-types';
import { Grid, Form, Input, Message } from 'semantic-ui-react';
import RegisterMutation from '../../mutations/RegisterMutation';
import { saveUserData } from '../../authentication';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  state ={
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: {
      field: '',
      message: '',
    },
  };

  validateFormFields = () => {
    const { password, confirmPassword } = this.state;
    if (password.length < 6) {
      this.setState({
        error: {
          field: 'password',
          message: 'password must contain at least 6 characters.', 
        }
      });
      return false;
    }
    if (password !== confirmPassword) {
      this.setState({
        error: {
          field: 'password',
          message: 'confirm password is different from password.', 
        }
      });
      return false;
    }
    return true;
  }

  handleSubmit = () => {
    if (!this.validateFormFields())
      return;

    const { firstName, lastName, email, password } = this.state;
    const variables = {
      user: {
        name: {
          first: firstName,
          last: lastName,
        },
        email,
        password,
      }
    };

    RegisterMutation(variables, this.registerCompleted, this.registerError);
  };

  handleFieldChange = (e, { name, value }) => this.setState({[name]: value}); 

  registerCompleted = (userData) => {
    const { setAuthenticatedUser } = this.props;
    console.log(userData);
    saveUserData(userData);
    setAuthenticatedUser(userData.user);
    this.setState({
      redirect: true, 
    });

  };

  registerError = (errors) => {
    console.log(errors);
    this.setState({
      error: {
        field: 'unspecified',
        message: errors[0].message,
      }
    });
  }

  render() {
    const { error } = this.state;
    // console.log(error);

    if (this.state.redirect)
      return <Redirect to='/' />

    return (
      <div>
        <h1 className='center'>Register</h1>
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
                <label>First name</label>
                <Input required name='firstName' placeholder='Enter first name' onChange={ this.handleFieldChange } />
              </Form.Field>
              <Form.Field>
                <label>Last name</label>
                <Input required name='lastName' placeholder='Enter last name' onChange={ this.handleFieldChange } />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input required type='email' name='email' placeholder='Enter email' onChange={ this.handleFieldChange } />
              </Form.Field>
              <Form.Field error={ error.field === 'password'} >
                <label>Password</label>
                <Input required name='password' type='password' placeholder='Password' onChange={ this.handleFieldChange } />
                { error.field === 'password' && <label>{ error.message }</label> }
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Input required name='confirmPassword' type='password' placeholder='Confirm password' onChange={ this.handleFieldChange } />
              </Form.Field>
              <Form.Button content='Register' basic color='green' />
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
