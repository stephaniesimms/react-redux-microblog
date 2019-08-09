import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PostForm from './PostForm';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { sendDeleteToAPI, updatePost, getPostFromAPI } from '../actions';
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

  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    }
  }
  
  showEditForm() {
    this.setState({ editing: true });
  }

  handleDelete() {
    const postId = this.props.match.params.postId;  
    this.props.sendDeleteToAPI(postId);

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
    if (!this.props.post) {
      return "Loading...";
    }

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

// function mapStateToProps(state, ownProps) {
//   console.log("Pre Step: redux state in post", state)
//   const postId = ownProps.match.params.postId;  
//   return { post: state.posts[postId] };
// }

// export default connect(mapStateToProps, 
//   { sendDeleteToAPI, updatePost, getPostFromAPI })(Post);

function mapDispatchToProps(state, props) {
  let id = props.match.params.postId;
  return {
    id,
    post: state.posts[id]
  }
}

export default connect(mapDispatchToProps, {sendDeleteToAPI, updatePost, getPostFromAPI}) (Post);