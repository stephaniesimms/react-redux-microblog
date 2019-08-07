import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PostForm from './PostForm';
import Post from './Post';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Homepage/>} />
        <Route path="/new" exact render={() => <PostForm />} />
        <Route path="/:postId" exact render={rtProps => <Post {...rtProps}/>} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;