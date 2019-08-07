import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PostForm from './PostForm';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  showEditForm() {
    this.setState({ editing: true
     });
  }

  handleDelete() {
    const postId = this.props.match.params.postId;  
    this.props.deletePost(postId);
    this.props.history.push('/');
  }

  handleEdit(newPost) {
    const postId = this.props.match.params.postId;   
    this.props.updatePost(newPost, postId);
    this.setState({
      editing: false
    });
  }

  render() {
    const postId = this.props.match.params.postId;   
    const post = this.props.posts[postId];
    const { title, description, body } = post;
    const editForm = <PostForm  
      formType="Edit" 
      post={post} 
      id={postId}           
      updatePost={this.handleEdit} 
    />

    return (
      <div id={postId}>
        <h1>{title}</h1>
        <p><em>{description}</em></p>
        <p>{body}</p>
        <Button onClick={this.showEditForm}><i className="far fa-edit"></i></Button>
        <Button onClick={this.handleDelete}><i className="far fa-window-close"></i></Button>
        { this.state.editing ? editForm : null}
      </div>
    );
  }
}

export default Post;