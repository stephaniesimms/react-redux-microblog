import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {
        post1: {
          title: 'testpost',
          description: 'asdgdsag',
          body: 'dsagdasgadsg',
          comments: [{comment: "comment 1", id: "f37168fd-922c-4b45-abc9-32bae93014d9"}]
        }
      }
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addPost(newPost, newId) {
    const postsCopy = {...this.state.posts};
    postsCopy[newId] = newPost;

    this.setState({
      ...this.state,
      posts: postsCopy
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
    const postsCopy = {...this.state.posts};
    postsCopy[id] = newPost;

    this.setState({
      posts: postsCopy
    });
  }

  addComment(postId, comment) {
    const postsCopy = {...this.state.posts};
    const post = postsCopy[postId];
    post.comments = [...post.comments, comment];

    this.setState({
      ...this.state,
      posts: postsCopy
    });
  }

  deleteComment(postId, commentId) {
    const postsCopy = {...this.state.posts};
    const post = postsCopy[postId];
    const comments = post.comments;

    // Remove comment by filtering
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    post.comments = updatedComments;

    this.setState({
      ...this.state,
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
          addComment={this.addComment}
          deleteComment={this.deleteComment}
          />
      </div>
    );
  }
}

export default App;