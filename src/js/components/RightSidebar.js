import React from 'react';

import Sprite from './sidebarComponents/Sprite';

class RightSidebar extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {sprites: props.sprites};
  }

  render () {
    const SPRITES = this.state.sprites.map(
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