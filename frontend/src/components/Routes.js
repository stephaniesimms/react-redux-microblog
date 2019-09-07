import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PostForm from '../containers/PostForm';
import Post from '../containers/Post';

/** Routes to:
 * 
 *   - homepage
 *   - new form
 *   - individual posts
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact render={() => <Homepage />} />
        <Route path='/new' exact render={rtProps => <PostForm {...rtProps}
          formType='New Post' />} />
        <Route path='/posts/:postId' exact render={rtProps => <Post {...rtProps} />} />
        <Redirect to='/' />
      </Switch>
    );
  }
}


export default Routes;