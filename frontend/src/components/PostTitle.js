import React, { Component } from 'react';
import './PostTitle.css';

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

//FIXME: rerender this component when user votes - sendVoteToAPI from here
class PostTitle extends Component {
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
    console.log('PostTitle props', this.props)
    const { deletePost, post, showEditForm } = this.props;

    return (
      <div className='PostTitle'>
        <h3>{post.title}</h3>
        <p><em>{post.description}</em></p>
        <p>{post.body}</p>

        <div className='PostTitle-right'>
          <i className='fa fa-edit text-info'
            onClick={showEditForm} />

          <i className='fa fa-times text-danger'
            onClick={deletePost} />


          <div className="PostTitle-votes">
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


export default PostTitle;