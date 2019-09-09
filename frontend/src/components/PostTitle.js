import React, { Component } from 'react';

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
      <div>
        <h1>{post.title}</h1>
        <p><em>{post.description}</em></p>
        <p>{post.body}</p>

        <i className='fa fa-edit text-primary'
          onClick={showEditForm} />

        <i className='fa fa-times text-danger'
          onClick={deletePost} />

        <div className="PostTitle-votes">
          <b>votes: {post.votes}</b>

          <i className="fas fa-grin-stars text-success"
            onClick={this.doVoteUp} />
          <i className="fas fa-dizzy text-danger"
            onClick={this.doVoteDown} />
        </div>
      </div>

      //   <Card style={{ width: '40vw', display: 'inline-block', marginRight: '15px', maxWidth: '300px' }}>
      //     <Link to={`/posts/${this.props.id}`}>
      //       <Card.Title style={{ marginTop: '15px' }}>{this.props.title}</Card.Title>
      //     </Link>

      //     <Card.Body>{this.props.description}</Card.Body>
      //     <div className="card-footer">
      //       <small>{this.props.votes} votes</small>
      //       <i className="fas fa-thumbs-up text-success ml-2"
      //         onClick={() => this.props.doVote("up", this.props.id)} />
      //       <i className="fas fa-thumbs-down text-danger ml-2"
      //         onClick={() => this.props.doVote("down", this.props.id)} />
      //     </div>
      //   </Card>
    );
  }
}


export default PostTitle;