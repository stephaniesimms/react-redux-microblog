import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Post from '../containers/Post';
import NewPost from '../containers/NewPost';

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
        <Route path='/new' exact render={rtProps => <NewPost {...rtProps}/>} />
        <Route path='/posts/:postId' exact render={rtProps => <Post {...rtProps} />} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;