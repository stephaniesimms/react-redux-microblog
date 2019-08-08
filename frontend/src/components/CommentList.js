import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    const comments = this.props.comments.map(
      comment => <Comment key={comment.id}
                          commentId={comment.id} 
                          text={comment.comment}
                          deleteComment={this.props.deleteComment}
                          postId={this.props.postId}/>
    );

    return (
      <div>{ comments }</div>
    );
  }
}

export default CommentList;