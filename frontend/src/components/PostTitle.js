import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */
class PostTitle extends Component {  
  render() {
    return (
      <Card style={{ width: '40vw', display: 'inline-block', marginRight: '15px', maxWidth: '300px' }}>
        <Link to={`/posts/${this.props.id}`}>
          <Card.Title style={{ marginTop: '15px' }}>{this.props.title}</Card.Title>
        </Link>
        <Card.Body>{this.props.description}</Card.Body>
      </Card>
    );
  }
}


export default PostTitle;