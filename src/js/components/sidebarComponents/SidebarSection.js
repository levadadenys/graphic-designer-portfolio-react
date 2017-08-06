import React from 'react';
import { NavLink } from 'react-router-dom';

class SidebarSection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {title: props.title, href: props.href};
  }

  render () {
    const TITLE = this.state.title;

    return (
      <span className="sidebar-nav-item">
        <NavLink activeClassName="active" to={this.state.href}>
          <span>{TITLE}</span>
        </NavLink>
      </span>
    );
  }

}

export default SidebarSection;