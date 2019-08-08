import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    evt.preventDefault();

    const { postId, commentId } = this.props
    this.props.deleteComment(postId, commentId);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>X</button>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default connect(null, { deleteComment })(Comment);