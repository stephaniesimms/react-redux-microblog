import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewPost from '../containers/NewPost';
import Post from '../containers/Post';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Homepage posts={this.props.posts}/>} />
        <Route path="/new" exact render={rtProps => <NewPost {...rtProps} 
          addPost={this.props.addPost} 
          formType="New Post"/> } />
        <Route path="/:postId" exact render={rtProps => <Post {...rtProps} 
          posts={this.props.posts}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;