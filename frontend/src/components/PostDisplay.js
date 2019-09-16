import React, { Component } from 'react';
import './PostDisplay.css';

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */
class PostDisplay extends Component {
  constructor(props) {
    super(props);
    this.doVoteUp = this.doVoteUp.bind(this);
    this.doVoteDown = this.doVoteDown.bind(this);
  }

  doVoteUp() {
    this.props.doVote('up');
  }

  doVoteDown() {
    this.props.doVote('down');
  }

  render() {
    const { deletePost, post, showEditForm } = this.props;

    return (
      <div className='PostDisplay'>
        <h3>{post.title}</h3>
        <p><em>{post.description}</em></p>
        <p>{post.body}</p>

        <div className='PostDisplay-right'>
          <i className='fa fa-edit text-info'
            onClick={showEditForm} />

          <i className='fa fa-times text-danger'
            onClick={deletePost} />


          <div className="PostDisplay-votes">
            <b>votes: {post.votes}</b>

            <i className="fas fa-grin-stars text-warning"
              onClick={this.doVoteUp} />
            <i className="fas fa-dizzy text-danger"
              onClick={this.doVoteDown} />
          </div>
        </div>
      </div>
    );
  }
}


export default PostDisplay;