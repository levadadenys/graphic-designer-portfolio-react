import React from 'react';
import skills from './../../imgs/skills.jpg';

class SkillsetPage extends React.PureComponent {
  render () {
    return (
      <div className="col-md-10 col-xs-12 col-sm-12 ">
        <img src={skills} alt="placeholder" style={{
          width: '100%',
          height: '100%'
        }} />
      </div>
    );
  }
}

export default SkillsetPage;