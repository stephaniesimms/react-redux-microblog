import React, { Component } from 'react';
import PostTitle from '../components/PostTitle';
import { connect } from "react-redux";
import { getTitlesFromAPI } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.getTitlesFromAPI();
  }

  render() {
    const titles = this.props.titles.map(
      (title) => 
        <PostTitle key={title.id}
          id={title.id}
          title={title.title}
          description={title.description} />
    );
    console.log('POSTLIST:', titles)
    return (
      <div>
        <h6>Welcome!</h6>
        { titles }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { titles: state.titles };
}

export default connect(mapStateToProps, { getTitlesFromAPI })(PostList);