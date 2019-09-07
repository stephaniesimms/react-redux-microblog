import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PostForm from './PostForm';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { sendDeleteToAPI, sendUpdateToAPI, getPostFromAPI } from '../actions';
import { connect } from 'react-redux';

/** Post:
 *
 * - get post data from API, if not present
 * - allows post to be edited (toggleEdit is local state for this)
 * - handles edit form submission
 * - handles add-comment form submission
 * - handles comment-deletion
 * - handles post-deletion
 */
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

  /** If we don't have the post, request it from API. */

  // Confirm the if statement below, loads post from redux state if available
  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
      // TODO: GET COMMENTS FOR POST
    }
  }
  
  showEditForm() {
    this.setState({ editing: true });
  }

  /** Handle post deletion: deletes from backend. */

  async handleDelete() {
    const postId = this.props.match.params.postId;  
    await this.props.sendDeleteToAPI(postId);

    this.props.history.push('/');
  }

  /** Handle post editing: adds to backend. */

  async handleEdit(updatedPost) {
    const postId = this.props.match.params.postId;   
    await this.props.sendUpdateToAPI(updatedPost, postId);

    this.setState({
      editing: false
    });
  }

  /** Render:
   *
   * - if not post yet, a loading message
   * - if editing, the edit form & comments
   * - if not, the display & comments
   */
  render() {
    if(this.props.error) {
      return <p>Cannot find post</p>;
    }

    if (!this.props.post) {
      return 'Loading...';
    }
    
    const post = this.props.post;
    const { title, description, body, comments, id } = post;

    const editForm = <PostForm  
      formType='Edit' 
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
        <Button onClick={this.showEditForm}><i className='far fa-edit'></i></Button>
        <Button onClick={this.handleDelete}><i className='far fa-window-close'></i></Button>
        { this.state.editing ? editForm : null}
        <CommentList comments={comments} deleteComment={this.props.deleteComment} postId={id}/>
        <CommentForm addComment={this.props.addComment} postId={id}/>
      </div>
    );  
  }
}

function mapDispatchToProps(state, props) {
  let id = props.match.params.postId;
  return {
    id,
    post: state.posts[id],
    //comments
    error: state.error
  }
}


export default connect(mapDispatchToProps, {sendDeleteToAPI, sendUpdateToAPI, getPostFromAPI}) (Post);