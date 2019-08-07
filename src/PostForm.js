import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      title: '',
      description: '',
      body: ''
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
        body
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  async handleSubmit(evt) {
    evt.preventDefault();
    // console.log(this.props)
    if (this.props.formType === "Edit") {
      this.props.updatePost({...this.state });
    } else {
      this.props.addPost({ ...this.state, id: uuid() });
      this.setState({
        title: '',
        description: '',
        body: ''
      });
      this.props.history.push('/');
    }
  };

  render() {
    // console.log("this.props in postform render", this.props)
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
                          type="text" />
          </Form.Group>
          <Form.Group>
          <Form.Label>Description</Form.Label>
            <Form.Control id="description"
                          name="description"
                          onChange={this.handleChange}
                          value={this.state.description}
                          size="md" 
                          type="text" /> 
          </Form.Group>
          <Form.Group>
          <Form.Label>Body</Form.Label>
            <Form.Control id="body"
                          name="body"
                          onChange={this.handleChange}
                          value={this.state.body} 
                          size="md" 
                          as="textarea" /> 
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

export default PostForm;