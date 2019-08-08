import React, { Component } from 'react';
import Nav from './Nav';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;