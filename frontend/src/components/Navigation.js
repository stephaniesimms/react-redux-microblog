import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
import './Navigation.css';

/** Displays main nav and header with bad Rithm School pun 
 * 
 * - nav links contain routes to:
 *   - new form
 *   - homepage
 *   - individual posts
*/
class Navigation extends Component {
  render() {
    return (
      <Jumbotron className='Jumbotron'>
        <div className='ml-3'>
          <h1>Microblog</h1>
          <p className='lead'>Cooking with hellfire</p>
        </div>
        <Navbar>
          <Nav>
            <NavLink exact to='/'>Blog</NavLink>
            <NavLink exact to='/new'>Add a new post</NavLink>
          </Nav>
        </Navbar>
      </Jumbotron>
    );
  }
}


export default Navigation;