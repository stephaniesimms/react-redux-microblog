import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostTitle extends Component {  
  render() {
    return (
      <div>
        <Link to={`/${this.props.id}`}>
          <h6>{this.props.title}</h6>
        </Link>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default PostTitle;