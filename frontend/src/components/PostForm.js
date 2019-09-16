import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './PostForm.css';
import { Link } from 'react-router-dom';

/** Show post form.
 *
 * Can be used for editing/adding --- it calls the parent with edit
 * or cancel actions.
 *
 */
class PostForm extends Component {
  static defaultProps = {
    post: { title: '', description: '', body: '' },
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
      <div className='PostForm p-3'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control id='PostForm-title'
              name='title'
              onChange={this.handleChange}
              value={this.state.title}
              type='text'
              alt='title' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control id='PostForm-description'
              name='description'
              onChange={this.handleChange}
              value={this.state.description}
              type='text'
              alt='description' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control id='PostForm-body'
              name='body'
              onChange={this.handleChange}
              value={this.state.body}
              as='textarea'
              alt='body'
              rows='10' />
          </Form.Group>
          <div className='row justify-content-end'>
            <Button className='mr-2'
              type='submit'
              variant='dark'>
              Post
          </Button>
            <Link to='/'>
              <Button className='mr-3' 
                variant='danger'>
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