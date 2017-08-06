import React from 'react';

class Sprite extends React.PureComponent {
  render () {
    return (
      <div className="sidebar-nav-item">
        <a href={this.props.href} target={this.props.target} className={this.props.icon}
           title={this.props.title} />

      </div>
    );
  }
}

export default Sprite;