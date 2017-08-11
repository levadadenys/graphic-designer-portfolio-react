import React from 'react';

import MenuModalItem from './MenuModalItem';

class MenuModal extends React.Component {
  static getDefaultProps = {
    section: {
      disabled: false,
      href: '#',
      title: 'Navigation'
    }
  };

  render () {
    const ITEMS = this.props.sections.map(
      section => <MenuModalItem key={section.title} section={section} />);

    return (
      <div>
        {ITEMS}
      </div>
    );
  }
}

export default MenuModal;