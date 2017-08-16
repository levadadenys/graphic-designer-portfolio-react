import React from 'react';
import placeholder from './../../imgs/170px-Harold_on_top.jpg';

class PortfolioPage extends React.PureComponent {
  render () {
    return (
      <div className="col-md-10 col-xs-12 col-sm-12 ">
        <img src={placeholder} alt="placeholder"
             style={{width: '100%', height: '100%'}} />
      </div>
    );
  }
}

export default PortfolioPage;