import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/** Comment form
 *
 * Can be used for adding/editing: shows form and tracks input.
 *
 */
class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  async handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitCommentForm(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Control id='comment'
                        name='comment'
                        onChange={this.handleChange}
                        value={this.state.comment}
                        placeholder='New Comment' 
                        size='md' 
                        type='text'
                        alt='comment' />
        </Form.Group>
        <Button type='submit' 
                variant='outline-dark' 
                size='md'>
                Add
        </Button>
      </Form>
    );
  }
}

export default CommentForm;