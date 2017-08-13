import React from 'react';
import NavigationLink from './../NavigationLink';

class MenuModalItem extends React.Component {
  static defaultProps = {
    section: {
      disabled: false,
      href: '#',
      title: 'Navigation'
    }
  };

  render () {
    return (
      <div className="menu-modal-nav-item">
        <NavigationLink {...this.props.section} />
      </div>
    );
  }

}

export default MenuModalItem;