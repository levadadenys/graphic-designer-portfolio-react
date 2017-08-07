import React from 'react';
import { NavLink } from 'react-router-dom';

class SidebarSection extends React.Component {
  static defaultProps = {
    href: '#',
    title: 'Navigation'
  };

  render () {
    return (
      <span className="sidebar-nav-item">
        <NavLink activeClassName="active" to={this.props.href}>
          <span>{this.props.title}</span>
        </NavLink>
      </span>
    );
  }

}

export default SidebarSection;