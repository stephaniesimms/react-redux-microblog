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
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  addPost(newPost) {
    this.setState({
      posts: {...this.state.posts, newPost}
    });
  }

  deletePost(id) {
    const postsCopy = {...this.state.posts};
    delete postsCopy[id];
    this.setState({
      posts: postsCopy
    });
  }

  updatePost(newPost, id) {
    console.log(newPost, id)
    const postsCopy = {...this.state.posts};
    postsCopy[id] = newPost;
    this.setState({
      posts: postsCopy
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes posts={this.state.posts} 
          deletePost={this.deletePost}
          addPost={this.addPost}
          updatePost={this.updatePost}
          />
      </div>
    );
  }
}

export default App;
