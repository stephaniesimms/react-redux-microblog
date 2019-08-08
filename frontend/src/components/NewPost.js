import React, { Component } from 'react';
import PostForm from '../containers/PostForm';

class NewPost extends Component {

  render() {
    return (
      <div>
        <PostForm formType="New Post" />
      </div>
    );
  }
}

export default NewPost;