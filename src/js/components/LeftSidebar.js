import React from 'react';

import SidebarSection from './sidebarComponents/SidebarSection';

class LeftSidebar extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {sections: props.sections};
  }

  render () {
    const SECTIONS = this.state.section.map(
      section => <SidebarSection key={section.title} title={section.title}
                                 href={section.href} />);
    return (
      <div>
        {SECTIONS}
      </div>
    );
  }
}

export default LeftSidebar;