import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Microblog</h1>
        <h4>Get in the Rithm of blogging!</h4>
          <nav className="navbar">
            <ul className="navbar-nav">
              <Link to='/'>
                <li className="nav-item">Blog</li>
              </Link>
              <Link to="/new">
                <li className="nav-item">Add a new post</li>
              </Link>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;