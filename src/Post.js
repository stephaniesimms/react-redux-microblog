import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Post extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    this.props.deletePost(this.props.id);
    this.props.history.push('/');
  }

  handleEdit() {
    this.props.editPost(this.props.id);
    this.props.history.push(`/${this.props.id}`);
  }

  render() {
    const { id, title, description, body } = this.props.posts.postId;
    
    return (
      <div id={id}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p><em>{body}</em></p>
        <Button onClick={this.handleEdit}><i className="far fa-edit"></i></Button>
        <Button onClick={this.handleDelete}><i className="far fa-window-close"></i></Button>
      </div>
    );
  }
}

export default Post;