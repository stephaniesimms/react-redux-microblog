import React, { Component } from 'react';
import PostTitle from './PostTitle';

class PostList extends Component {
  render() {
    const posts = Object.entries(this.props.posts).map(
      ([key, post]) => {
        return <PostTitle key={key}
                          id={key}
                          title={post.title}
                          description={post.description}
                          body={post.body}/>
    });

    return (
      <div>
        <h6>Welcome!</h6>
        { posts }
      </div>
    );
  }
}

export default PostList;