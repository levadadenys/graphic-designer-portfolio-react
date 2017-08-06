import React from 'react';

import HamburgerButton from './sidebarComponents/HamburgerButton';
import Sprite from './sidebarComponents/Sprite';

class RightSidebar extends React.Component {
  static defaultProps = {
    sprites: []
  };

  render () {
    const SPRITES = this.props.sprites.map(
      sprite => <Sprite key={sprite.title} icon={sprite.icon}
                        title={sprite.title} href={sprite.href}
                        target={sprite.target} />);
    return (
      <div className="col-md-1 hidden-sm hidden-xs">
        <div className="right-sidebar">
          <div className="sidebar-nav-item">
            <HamburgerButton />
          </div>
          {SPRITES}
        </div>
      </div>
    );
  }
}

export default RightSidebar;