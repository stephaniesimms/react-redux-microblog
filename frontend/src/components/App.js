import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from './Routes';
import './App.css';

/** Overall blog application:
 *
 * - shows main navbar with links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Routes />
      </div>
    );
  }
}


export default App;