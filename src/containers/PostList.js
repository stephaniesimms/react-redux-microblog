import React, { Component } from 'react';
import PostTitle from '../components/PostTitle';
import { connect } from "react-redux";

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

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(PostList);