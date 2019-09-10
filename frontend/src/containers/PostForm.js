import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './PostForm.css';
import { Link } from 'react-router-dom';

/** Show post form.
 *
 * Can be used for editing/adding --- it just calls the parent with edit
 * or cancel actions.
 *
 */
class PostForm extends Component {
  static defaultProps = {
    post: { title: "", description: "", body: "" },
  };

  constructor(props) {
    super(props)
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      body: this.props.post.body,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.save(this.state)
  };

  render() {
    return (
      <div className='PostForm'>
        <h3>{this.props.formType}</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>Title</Form.Label>
            <Col sm={10}>
              <Form.Control id='title'
                name='title'
                onChange={this.handleChange}
                value={this.state.title}
                size='md'
                type='text'
                alt='title' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>Description</Form.Label>
            <Col sm={10}>
              <Form.Control id='description'
                name='description'
                onChange={this.handleChange}
                value={this.state.description}
                size='md'
                type='text'
                alt='description' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>Body</Form.Label>
            <Col sm={10}>
              <Form.Control id='body'
                name='body'
                onChange={this.handleChange}
                value={this.state.body}
                size='md'
                as='textarea'
                alt='body' rows='5' />
            </Col>
          </Form.Group>
          <div className='row justify-content-end'>
          <Button className='mr-2' type='submit' variant='dark'>
            Post
          </Button>
          <Link to='/'>
              <Button className='mr-3' variant='danger'>
              Cancel
            </Button>
          </Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default PostForm;
