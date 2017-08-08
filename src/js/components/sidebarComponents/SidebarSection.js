import React from 'react';
import { NavLink } from 'react-router-dom';

class SidebarSection extends React.Component {
  static defaultProps = {
    href: '#',
    title: 'Navigation',
    disabled: false
  };

  render () {
    return (
      <span className="sidebar-nav-item">
        <NavLink activeClassName="active"
                 className={this.props.disabled ? 'disabled-link' : ''}
                 to={this.props.href}>
          <span>{this.props.title}</span>
        </NavLink>
      </span>
    );
  }

}

export default SidebarSection;