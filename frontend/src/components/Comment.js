import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';

/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */
class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    evt.preventDefault();

    const { postId, commentId } = this.props;
    this.props.deleteComment(postId, commentId);
  }

  render() {
    return (
      <div>
        <p>
          <i
            className='fa fa-times text-danger mr-2'
            onClick={this.handleDelete}
          />
          {this.props.text}</p>
      </div>
    );
  }
}


export default connect(null, { deleteComment })(Comment);