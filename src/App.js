import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {
        postId: {
          title: 'testpost',
          description: 'asdgdsag',
          body: 'dsagdasgadsg'
        }
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
