import React, { Component } from 'react';
import PostTitle from '../components/PostTitle';
import { connect } from 'react-redux';
import { getTitlesFromAPI } from '../actions';

// TODO: add votes and display posts by popularity

/** Show list of blog titles, ordered by popularity. */
class PostList extends Component {
  async componentDidMount() {
    await this.props.getTitlesFromAPI();
  }

  render() {
    if (!this.props.titles) return <b>Loading...</b>;
    
    const titles = this.props.titles.map(
      (title) => 
        <PostTitle key={title.id}
          id={title.id}
          title={title.title}
          description={title.description} />
    );

    return (
      <div>{ titles }</div>
    );
  }
}

function mapStateToProps(state) {
  return { titles: state.titles };
}


export default connect(mapStateToProps, { getTitlesFromAPI })(PostList);