import React from 'react';

import Sprite from './sidebarComponents/Sprite';

import Hamburger from './../../imgs/Menu_btn_white.svg'

class RightSidebar extends React.Component {
  static defaultProps = {
    sprites: []
  };

  render () {
    const SPRITES = this.props.sprites.map(
      sprite => <Sprite key={sprite.title} icon={sprite.icon}
                        title={sprite.title} href={sprite.href} />);
    return (
      <div className="col-md-1 col-xs-1">
        <div className="right-sidebar">
          <div className="sidebar-nav-item">
            <a target="_blank" href="kek4" title="Menu">
              <img src={Hamburger} className="ham-btn"
                   alt="logo" />
            </a>
          </div>
          {SPRITES}
        </div>
      </div>
    );
  }
}

export default RightSidebar;