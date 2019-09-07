import React, { Component } from 'react';
import Comment from './Comment';

/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them.
 *
 */
class CommentList extends Component {
  render() {
    const comments = this.props.comments.map(
      comment => <Comment key={comment.id}
        commentId={comment.id}
        text={comment.text}
        triggerDelete={this.props.deleteComment}
        postId={this.props.postId} />
    );

    return (
      <div>{comments}</div>
    );
  }
}


export default CommentList;