import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './PostForm.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendPostToAPI } from '../actions';

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
      const { title, description, body } = this.state;
      await this.props.sendPostToAPI({ title, description, body });

      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div className='PostForm'>
        <h1>{this.props.formType}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>Title</Form.Label>
            <Col sm={10}>
              <Form.Control id="title"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title} 
                            size="md" 
                            type="text"
                            alt="title" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>Description</Form.Label>
            <Col sm={10}>
              <Form.Control id="description"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description}
                            size="md" 
                            type="text"
                            alt="description" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>Body</Form.Label>
            <Col sm={10}>
              <Form.Control id="body"
                            name="body"
                            onChange={this.handleChange}
                            value={this.state.body} 
                            size="md" 
                            as="textarea"
                            alt="body" rows="5"/> 
            </Col>
          </Form.Group>
          <Button type="submit" 
                  variant="outline-dark" 
                  size="md">
                    Post
          </Button>
          <Link to="/">
            <Button variant="outline-dark" size="md">Cancel</Button>
          </Link>
        </Form> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { sendPostToAPI })(PostForm);