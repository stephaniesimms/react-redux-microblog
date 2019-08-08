import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PostForm from './PostForm';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { deletePost, updatePost } from '../actions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

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

  handleEdit(updatedPost) {
    const postId = this.props.match.params.postId;   
    this.props.updatePost(updatedPost, postId);

    this.setState({
      editing: false
    });
  }

  render() {
    try {
      const post = this.props.post;
      const { title, description, body, comments, id } = post;
      
      const editForm = <PostForm  
        formType="Edit" 
        post={post} 
        id={id}           
        updatePost={this.handleEdit} 
      />
  
      // check if this.state editing is true
      // if so set formType to handle data flow for editing a blog
      // otherwise don't show edit form
      return (
        <div>
          <h1>{title}</h1>
          <p><em>{description}</em></p>
          <p>{body}</p>
          <Button onClick={this.showEditForm}><i className="far fa-edit"></i></Button>
          <Button onClick={this.handleDelete}><i className="far fa-window-close"></i></Button>
          { this.state.editing ? editForm : null}
          <CommentList comments={comments} deleteComment={this.props.deleteComment} postId={id}/>
          <CommentForm addComment={this.props.addComment} postId={id}/>
        </div>
      );
    } catch(error) {
      return <Redirect to='/' />
    }
  }
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.match.params.postId;  
  return { post: state.posts[postId] };
}

export default connect(mapStateToProps, 
  { deletePost, updatePost })(Post);