import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from './Routes';

/** Overall blog application:
 *
 * - shows main navbar with links and contains routes to:
 *   - homepage
 *   - new form
 *   - individual posts
 */
class App extends Component {
  render() {
    return (
      <div className='App container-fluid mt-3'>
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;