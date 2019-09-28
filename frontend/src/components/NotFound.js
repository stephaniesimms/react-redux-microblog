import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './NotFound.css';

/**
 * NotFou;nd: rendered when page does not match
 * any of the routes
 */

class NotFound extends Component {
  render() {
    return (
      <Card className='NotFound-card text-center'
        bg='dark'
        text='white'
        style={{ width: '30rem' }}>

        <Card.Body>
          <i className='fas fa-skull-crossbones fa-7x' />
          <Card.Title className='not-found-message pt-3'>
            Oops, we didn't find what you were looking for...
        </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default NotFound;
