import React, { Component } from 'react';
import PostList from '../containers/PostList';

/** Homepage: displays list of all blog posts */
class Homepage extends Component {
  render() {
    return (
      <PostList />
    );
  }
}


export default Homepage;