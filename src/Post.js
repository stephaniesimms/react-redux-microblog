import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Post extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    const postId = this.props.match.params.postId;  
    this.props.deletePost(postId);
    this.props.history.push('/');
  }

  handleEdit() {
    const postId = this.props.match.params.postId;   
    this.props.editPost(postId);
    this.props.history.push(`/${postId}`);
  }

  render() {
    const postId = this.props.match.params.postId;   
    const post = this.props.posts[postId];
    const { title, description, body } = post;

    return (
      <div id={postId}>
        <h1>{title}</h1>
        <p><em>{description}</em></p>
        <p>{body}</p>
        <Button onClick={this.handleEdit}><i className="far fa-edit"></i></Button>
        <Button onClick={this.handleDelete}><i className="far fa-window-close"></i></Button>
      </div>
    );
  }
}

export default Post;