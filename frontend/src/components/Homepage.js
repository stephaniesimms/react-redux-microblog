import React, { Component } from 'react';
import TitleList from '../containers/TitleList';

/** Homepage: displays list of all blog posts */
class Homepage extends Component {
  render() {
    return (
      <main>
        <p>Welcome to <b>Microblog</b>, a fake forum for heavy metal-themed
        culinary delights. Here you will find diabolical dishes, forbidden fruits, and demonic desserts to exorcise your taste buds. Remember, gluttony is the best sin. Post your devil-icious dishes and leave comments. Vote for the posts you deem the most diabolical. 
        </p>
        <TitleList />
      </main>
    );
  }
}

export default Homepage;