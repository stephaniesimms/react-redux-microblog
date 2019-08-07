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
    return (
      <div id={this.props.id}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p><em>{this.props.body}</em></p>
        <Button onClick={this.handleEdit}><i class="far fa-edit"></i></Button>
        <Button onClick={this.handleDelete}><i class="far fa-window-close"></i></Button>
      </div>
    );
  }
}

export default Post;