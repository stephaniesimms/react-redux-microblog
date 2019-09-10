import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './PostForm.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendPostToAPI } from '../actions/actions';

// TODO: should PostForm be a component instead? 
// maybe refactor to follow solution
// otherwise update docstring

/** Show post form.
 *
 * Can be used for editing/adding --- it just calls the parent with edit
 * or cancel actions.
 *
 */
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
    if (this.props.post) {
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

  /** Checks the formType prop sent from Post component to decide 
   * whether to create a new post or edit an existing post
  */
  async handleSubmit(evt) {
    evt.preventDefault();

    if (this.props.formType === 'Edit') {
      this.props.updatePost({
        ...this.state,
        comments: this.props.post.comments
      });
    } else {
      const { title, description, body } = this.state;
      await this.props.sendPostToAPI({ title, description, body });

      this.props.history.push('/');
    }
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

function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { sendPostToAPI })(PostForm);