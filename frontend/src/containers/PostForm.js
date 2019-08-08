import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      title: '',
      description: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if(this.props.post) {
      const { title, description, body } = this.props.post;

      this.setState({
        title,
        description,
        body,
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  // checks the formType prop sent from Post component to decide whether 
  // to create a new post or edit an existing post
  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.formType === "Edit") {
      this.props.updatePost({...this.state, 
        comments: this.props.post.comments });
    } else {
      this.props.addPost({ ...this.state, comments: [] }, uuid());
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div style={{ border: "2px solid rgba(0,0,0,.125)", borderRadius: "10px", padding: "10px", overflow: "auto" }}>
        <h1>{this.props.formType}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control id="title"
                          name="title"
                          onChange={this.handleChange}
                          value={this.state.title} 
                          size="md" 
                          type="text"
                          alt="title" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Description</Form.Label>
            <Form.Control id="description"
                          name="description"
                          onChange={this.handleChange}
                          value={this.state.description}
                          size="md" 
                          type="text"
                          alt="description" /> 
          </Form.Group>
          <Form.Group>
          <Form.Label>Body</Form.Label>
            <Form.Control id="body"
                          name="body"
                          onChange={this.handleChange}
                          value={this.state.body} 
                          size="md" 
                          as="textarea"
                          alt="body" /> 
          </Form.Group>
          <Button type="submit" 
                  variant="outline-dark" 
                  size="md">
                    Post
          </Button>
          <Link to="/">
            <Button 
                variant="outline-dark" 
                size="md">
                  Cancel
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { addPost })(PostForm);