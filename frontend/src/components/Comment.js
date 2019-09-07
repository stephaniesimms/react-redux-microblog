import React, { Component } from 'react';
import { connect } from 'react-redux';

/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them.
 *
 */
class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    evt.preventDefault();
    this.props.triggerDelete(this.props.commentId);
  }

  render() {
    return (
      <div>
        <p>
          {this.props.triggerDelete && (
            <i
              className='fa fa-times text-danger mr-2'
              onClick={this.handleDelete}
            />
          )}
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Comment;
// export default connect(null, { deleteComment })(Comment);