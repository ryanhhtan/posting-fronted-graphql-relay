import React, { Component} from 'react';
// import PropTypes from 'prop-types';
// import styles from './Navbar.css';
import { Menu } from 'semantic-ui-react'; 
// import { Link } from 'react-router-dom';

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeItem: 'home',
  //   };
  //   this.handleItemClick = this.handleItemClick.bind(this);
  // }

  // handleItemClick (e, { name }) {
  //   // console.log(name);
  //   this.setState({
  //     activeItem: name
  //   });
  // }

  render() {
    // const { activeItem } = this.state;
    console.log(this.props);
    const activeItem = this.props.location.pathname.slice(1);
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={ activeItem === 'home' || activeItem === '' } href='/' />
          <Menu.Item name='about' active={ activeItem === 'about' } href='/about' />
          <Menu.Item name='contact' active={ activeItem === 'contact' } href='contact' />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
