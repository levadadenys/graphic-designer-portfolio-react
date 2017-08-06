import React from 'react';

class Sprite extends React.PureComponent {
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