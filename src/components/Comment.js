import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    evt.preventDefault();

    const { postId, id } = this.props
    this.props.deleteComment(postId, id);
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

export default Comment;