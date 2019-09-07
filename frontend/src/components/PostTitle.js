import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

 //FIXME: rerender this component when user votes - sendVoteToAPI from here
class PostTitle extends Component {  
  render() {
    // console.log(this.props)
    return (
      <Card style={{ width: '40vw', display: 'inline-block', marginRight: '15px', maxWidth: '300px' }}>
        <Link to={`/posts/${this.props.id}`}>
          <Card.Title style={{ marginTop: '15px' }}>{this.props.title}</Card.Title>
        </Link>

        <Card.Body>{this.props.description}</Card.Body>
        <div className="card-footer">
          <small>{this.props.votes} votes</small>
          <i className="fas fa-thumbs-up text-success ml-2"
            onClick={() => this.props.doVote("up", this.props.id)} />
          <i className="fas fa-thumbs-down text-danger ml-2"
            onClick={() => this.props.doVote("down", this.props.id)} />
        </div>
      </Card>
    );
  }
}


export default PostTitle;