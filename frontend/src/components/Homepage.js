import React, { Component } from 'react';
import TitleList from '../containers/TitleList';

/** Homepage: displays list of all blog posts */
class Homepage extends Component {
  render() {
    return (
      <main>
        <p>Welcome to <b>Microblog</b>, a fake forum for heavy metal-themed
        culinary delights. Vote for the posts you deem the most/least
        diabolical. Add new recipes and other content. Leave comments.
        </p>
        <TitleList />
      </main>
    );
  }
}

export default Homepage;