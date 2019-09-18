import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './TitleList.css';
import {
  getPostsFromAPI,
  sendVoteToAPI
} from '../actions/actions';

/** Show list of blog titles, ordered by popularity.
 *  Allow up- and down-voting in the main list & for individual posts
 */
class TitleList extends Component {

  async componentDidMount() {
    await this.props.getPostsFromAPI();
  }

  vote(direction, id) {
    this.props.sendVoteToAPI(id, direction);
  }

 /** Display blog posts by highest to lowest number of votes 
  * NOTE: This method becomes inefficient at scale.
  * One alternative approach is to sort in Redux.
 */
  rankPosts(titleList) {
    return titleList.sort((a, b) => b.votes - a.votes); 
  }

  render() {
    if (Object.keys(this.props.titles).length === 0) {
      return <b>Loading...</b>;
    }

    const sortedTitles = this.rankPosts(this.props.titles);

    const titleList = sortedTitles.map(
      (title) =>
        <div key={title.id} className='col-sm-6'>
          <Card id={title.id} className='TitleList-card'>
            <Card.Body>
              <Link to={`/posts/${title.id}`}>
                <h6 className='TitleList-card-title'>{title.title}</h6>
              </Link>
              <p>{title.description}</p>
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
      <div className='row'>
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
)(TitleList);