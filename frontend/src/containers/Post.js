import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import PostDisplay from '../components/PostDisplay';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import {
  sendDeleteToAPI,
  sendUpdateToAPI,
  getPostFromAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  deleteCommentFromAPI
} from '../actions/actions';

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
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.vote = this.vote.bind(this);
  }

  /** If we don't have the post, request it from API. */

  // Confirm the if statement below, loads post from redux state if available
  async componentDidMount() {
    if (!this.props.posts) {
      await this.props.getPostFromAPI(this.props.id);
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

  handleEdit(updatedPost) {
    const postId = this.props.match.params.postId;
    this.props.sendUpdateToAPI(updatedPost, postId);

    this.setState({
      editing: false
    });
  }

  /** Handle adding a comment: adds to backend. */

  addComment(text) {
    this.props.sendCommentToAPI(this.props.post.id, text);
  }

  /** Handle deleting a comment in backend. */

  deleteComment(commentId) {
    this.props.deleteCommentFromAPI(this.props.post.id, commentId);
  }

  /** Handle voting in backend. */

  vote(direction) {
    this.props.sendVoteToAPI(this.props.post.id, direction)
  }

  /** Render:
   *
   * - if not post yet, a loading message
   * - if editing, the edit form & comments
   * - if not, the display & comments
   */
  render() {
    if (this.props.error) {
      return <p>Cannot find post</p>;
    }

    const post = this.props.post;

    if (!post) {
      return 'Loading...';
    }

    const editForm = <PostForm
      post={post}
      id={post.id}
      save={this.handleEdit}
    />

    /** Check if this.state editing is true to show edit form
    */
    return (
      <div className='container'>
        <PostDisplay post={post}
          showEditForm={this.showEditForm}
          deletePost={this.handleDelete}
          doVote={this.vote} />

        {this.state.editing ? editForm : null}

        <section className='Post-comments'>
          <hr></hr>
          <h4>Comments</h4>
          <CommentList comments={post.comments}
            deleteComment={this.deleteComment}
            postId={post.id}
          />
          <CommentForm submitCommentForm={this.addComment} />
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(state, props) {
  let id = props.match.params.postId;
  return {
    id,
    post: state.posts[id],
    error: state.error
  };
}

export default connect(
  mapDispatchToProps,
  {
    sendDeleteToAPI,
    sendUpdateToAPI,
    getPostFromAPI,
    sendCommentToAPI,
    deleteCommentFromAPI,
    sendVoteToAPI,
  }
)(Post);