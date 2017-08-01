import React from 'react';

import LeftSidebar from './../components/LeftSidebar';
import RightSidebar from './../components/RightSidebar';

class AboutPage extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {sections: props.sections, sprites: props.sprites};
  }

  render () {
    return (
      <div>
        <LeftSidebar sections={this.state.sections} />
        <RightSidebar sections={this.state.sprites} />

      </div>
    );
  }
}

export default AboutPage;