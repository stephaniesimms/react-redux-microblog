import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import {
  sendPostToAPI,
} from '../actions/actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }


  /** Handle new post: adds to backend. */

  handleSubmit({ title, description, body }) {
    this.props.sendPostToAPI({ title, description, body });
    this.props.history.push('/');
  }

  /** Cancel (redirect) */

  cancel() {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <PostForm
          save={this.handleSubmit}
        />
      </div>
    );
  }
}


export default connect(
  null, { sendPostToAPI }
)(NewPost);
