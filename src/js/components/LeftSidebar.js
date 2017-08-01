import React from 'react';

import SidebarSection from './sidebarComponents/SidebarSection';

class LeftSidebar extends React.PureComponent {
  static defaultProps = {
    sections: []
  };

  render () {
    const SECTIONS = this.props.sections.map(
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