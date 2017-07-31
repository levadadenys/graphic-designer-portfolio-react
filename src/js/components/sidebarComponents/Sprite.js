import React from 'react';

class Sprite extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {icon: props.icon, title: props.title, href: props.href};
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}

export default Sprite;