import React from 'react';

import Sprite from './sidebarComponents/Sprite';

class RightSidebar extends React.PureComponent {
  static defaultProps = {
    sprites: []
  };

  render () {
    const SPRITES = this.props.sprites.map(
      sprite => <Sprite key={sprite.title} icon={sprite.icon}
                        title={sprite.title} href={sprite.href} />);
    return (
      <div>
        <div>ham-link</div>
        {SPRITES}
      </div>
    );
  }
}

export default RightSidebar;