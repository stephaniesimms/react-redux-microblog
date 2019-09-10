import React, { Component } from 'react';
// import PostTitle from '../components/PostTitle';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './PostList.css';
import {
  getTitlesFromAPI,
  sendVoteToAPI
} from '../actions/actions';

// FIXME: need to rerender PostTitle and sendVoteToAPI from there when user clicks vote
// add votes and display posts by popularity

/** Show list of blog titles, ordered by popularity. */
class PostList extends Component {

  async componentDidMount() {
    if (this.props.titles.length === 0) {
      await this.props.getTitlesFromAPI();
    }
  }

  vote(direction, id) {
    console.log("sending vote to API", id, direction)
    this.props.sendVoteToAPI(id, direction);
  }

  render() {
    if (!this.props.titles) return <b>Loading...</b>;
    console.log(this.props)

    // const titles = this.props.titles.map(
    //   (title) =>
    //     <PostTitle key={title.id}
    //       id={title.id}
    //       title={title.title}
    //       description={title.description}
    //       votes={title.votes}
    //       doVote={this.vote} />
    // );

    const titleList = this.props.titles.map(
      (title) =>
        <div className='col' key={title.id}>
        <Card id={title.id} className='PostList-card'>
          <Card.Body>
            <Link to={`/posts/${title.id}`}>
              <h6 className='PostList-card-title'>{title.title}</h6>
            </Link>
            <p className='PostList-card-description'><em>{title.description}</em></p>
          </Card.Body>
          <Card.Footer>
            <small>{title.votes} votes</small>
            <i className='fas fa-grin-stars text-warning ml-2'
              onClick={() => this.vote('up', title.id)} />
            <i className='fas fa-dizzy text-danger ml-2'
              onClick={() => this.vote('down', title.id)} />
          </Card.Footer>
        </Card>
        </div>
    );

    return (
      <div className='row PostList'>
        {titleList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { titles: state.titles };
}

export default connect(
  mapStateToProps,
  { getTitlesFromAPI, sendVoteToAPI }
)(PostList);