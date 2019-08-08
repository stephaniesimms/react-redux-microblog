import React, { Component } from 'react';
import PostList from '../containers/PostList';

class Homepage extends Component {
  render() {
    return (
      <PostList posts={this.props.posts}/>
    );
  }
}

export default Homepage;