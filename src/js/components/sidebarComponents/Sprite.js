import React from 'react';

class Sprite extends React.PureComponent {
  static defaultProps = {
    herf: '#',
    target: '_blank',
    title: 'Contact',
    icon: 'socicon-mail socicons '
  };

  render () {
    return (
      <div className="sidebar-nav-item">
        <a href={this.props.href} target={this.props.target}
           title={this.props.title}>
          <span className={this.props.icon} />
        </a>
      </div>
    );
  }
}

export default Sprite;