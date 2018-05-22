import React, { Component} from 'react';
import { Menu, Dropdown } from 'semantic-ui-react'; 
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { user, logout } = this.props;
    // console.log(user);

    const activeItem = this.props.location.pathname.slice(1);
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={ activeItem === 'home' || activeItem === '' } href='/' />
          <Menu.Item name='about' active={ activeItem === 'about' } href='/about' />
          <Menu.Item name='contact' active={ activeItem === 'contact' } href='/contact' />
          <Menu.Menu position='right'>
            { !user && <Menu.Item name='login' active={ activeItem === 'login' } href='/login'/> }
            { !user && <Menu.Item name='register' active={ activeItem === 'register' } href='/register'/>}
            { user && <Dropdown text={ `${user.name.first} ${user.name.last}` } className='link item'> 
              <Dropdown.Menu>
                <Dropdown.Item name='profile' href='/profile'>Profile</Dropdown.Item>
                <Dropdown.Item name='logout' onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            }
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);
