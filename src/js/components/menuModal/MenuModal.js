import React from 'react';

import MenuModalItem from './MenuModalItem';

class MenuModal extends React.Component {
  static defaultProps = {
    sections: []
  };

  render () {
    const ITEMS = this.props.sections.map(
      section => <MenuModalItem key={section.title} section={section} />);

    return (

      <div id="menu-modal" className="modal fade"
           role="dialog"
           aria-labelledby="exampleModalLabel">
        <div className="menu-modal-navigation">
          {ITEMS}
        </div>
      </div>
    );
  }
}

export default MenuModal;