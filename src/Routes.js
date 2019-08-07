import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PostForm from './PostForm';
import Post from './Post';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Homepage posts={this.props.posts}/>} />
        <Route path="/new" exact render={rtProps => <PostForm {...rtProps} addPost={this.props.addPost}/>} />
        <Route path="/:postId" exact render={rtProps => <Post {...rtProps} 
          posts={this.props.posts}
          deletePost={this.props.deletePost}/>} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;