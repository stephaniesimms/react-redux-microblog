import React, { Component } from 'react';
// import PostTitle from '../components/PostTitle';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { getTitlesFromAPI, sendVoteToAPI } from '../actions';

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
        <Card key={title.id} id={title.id}
          style={{ width: '40vw', display: 'inline-block', marginRight: '15px', maxWidth: '300px' }}>
          <Link to={`/posts/${title.id}`}>
            <Card.Title style={{ marginTop: '15px' }}>{title.title}</Card.Title>
          </Link>

          <Card.Body>{title.description}</Card.Body>
          <div className="card-footer">
            <small>{title.votes} votes</small>
            <i className="fas fa-thumbs-up text-success ml-2"
              onClick={() => this.vote("up", title.id)} />
            <i className="fas fa-thumbs-down text-danger ml-2"
              onClick={() => this.vote("down", title.id)} />
          </div>
        </Card>

    );

    return (
      <div>{titleList}</div>
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