import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './PostList.css';
import {
  getPostsFromAPI,
  sendVoteToAPI
} from '../actions/actions';

// FIXME: add sort to display posts by popularity

/** Show list of blog titles, ordered by popularity. */
class PostList extends Component {

  async componentDidMount() {
    await this.props.getPostsFromAPI();
  }

  vote(direction, id) {
    this.props.sendVoteToAPI(id, direction);
  }

  // TODO: test, maybe this isn't necessary
  // currently checking for tie and sort by unique id as tie-breaker
  rankPosts(titleList) {
    return titleList.sort((a, b) => {
      if (b.votes === a.votes) {
        return b.id < a.id;
      }
      else {
        return b.votes - a.votes
      }
    });
  }

  render() {
    // FIXME: check if this.props.posts object is empty
    // if (!this.props.titles) return <b>Loading...</b>;
    // console.log(this.props)

    const sortedTitles = this.rankPosts(this.props.titles);

    const titleList = sortedTitles.map(
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
      <div className='PostList row'>
        {titleList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const titles = Object.entries(state.posts).map(([key, post]) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    votes: post.votes
  }));
  return { titles: titles };
}

export default connect(
  mapStateToProps,
  { getPostsFromAPI, sendVoteToAPI }
)(PostList);