import React from 'react';

class SidebarSection extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {title: props.section, href: props.href};
  }

  render () {
    return (
      <div></div>
    );
  }

}

export default SidebarSection;