import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationLink extends React.Component {
  static defaultProps = {
    disabled: false,
    href: '#',
    title: 'Navigation'
  };

  render () {
    return (
      <NavLink activeClassName="active"
               className={this.props.disabled
                 ? 'disabled-link'
                 : ''}
               to={this.props.href}>
        <span>{this.props.title}</span>
      </NavLink>
    );
  }
}

export default NavigationLink;