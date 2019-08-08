import React, { Component } from 'react';
import Nav from './Nav';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes posts={this.state.posts} 
          deletePost={this.deletePost}
          addPost={this.addPost}
          updatePost={this.updatePost}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
          />
      </div>
    );
  }
}

export default App;