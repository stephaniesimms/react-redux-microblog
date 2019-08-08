import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewPost from '../containers/NewPost';
import Post from '../containers/Post';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Homepage />} />
        <Route path="/new" exact render={rtProps => <NewPost {...rtProps} 
          formType="New Post"/> } />
        <Route path="/:postId" exact render={rtProps => <Post {...rtProps} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;