import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/** Displays main nav and header with bad Rithm School pun 
 * 
 * - nav links contain routes to:
 *   - new form
 *   - homepage
 *   - individual posts
*/
class Nav extends Component {
  render() {
    return (
      <div className='jumbotron' style={{ padding: '10px', backgroundColor: 'white', maxWidth: '100%' }}>
        <h1>Microblog</h1>
        <h4>Get in the Rithm of blogging!</h4>
        <nav className='navbar'>
          <ul className='nav ml-auto'>
            <Link to='/'>
              <li className='nav-item mr-4'>Blog</li>
            </Link>
            <Link to='/new'>
              <li className='nav-item'>Add a new post</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}


export default Nav;