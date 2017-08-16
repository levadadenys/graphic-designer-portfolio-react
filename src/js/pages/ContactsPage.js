import React from 'react';

import Levada from './../../imgs/denlev.jpg';
import Liakh from './../../imgs/lvv.jpg';

class ContactsPage extends React.PureComponent {
  render () {
    return (
      <div className="contact-me-page">
        <div className="col-md-1">
          <div className="socicon-periscope socicons loca">
            <span className="conticploc">  Kharkiv, UA</span>
          </div>
        </div>
        <div className="col-md-2">
          <div className="socicon-telegram socicons cont-ico">
            <br />
            <p className="conticp">@wladekwerkstatt</p>
          </div>
          <div className="socicon-skype socicons cont-ico">
            <br />
            <p className="conticp">live:wlodzislaw.lw</p>
          </div>
          <div className="socicon-viber socicons cont-ico">
            <br />
            <p className="conticp">+ 3 8 (096) 772 75 96</p>
          </div>
          <div className="socicon-viber socicons cont-ico">
            <br />
            <p className="conticp">+ 3 8 (099) 194 27 40</p>
          </div>
        </div>

        <div className="col-md-1" />

        <div className="col-md-6">
          <h1>I'll call back</h1>
          <h2>Just let me know if you want it ;)</h2>

          <form action="">
            <input type="text" name="Your name (Ex: Maurice)" id="e1"
                   placeholder="Your name (Ex: Maurice)" />
            <br />
            <input type="text" name="Your e-mail (Ex: mail@pochta.com)"
                   id="e2"
                   placeholder="Your e-mail (Ex: mail@pochta.com)" />
            <br />
            <input type="text" name="You're beautiful (Ex: Thx)" id="e3"
                   placeholder="You're beautiful (Ex: Thx)" />
            <br />
            <input type="submit" value="Push" />
          </form>

          <div className="row credits">
            <div>
              <h5>Website credits:</h5>
            </div>
            <div className="credits-person">
              <a href="https://github.com/wladek96" target="_blank"
                 rel="noopener noreferrer">
                <p className="credits-photo"
                   style={{'backgroundImage': `url(${Liakh})`}}>
                  <br />
                </p>
                <p className="credits-name">Liakh Vladislav</p>
                <p className="credits-role">Design + Code</p>
              </a>
            </div>
            <div className="credits-person">
              <a href="https://github.com/levadadenys" target="_blank"
                 rel="noopener noreferrer">
                <p className="credits-photo"
                   style={{'backgroundImage': `url(${Levada})`}}>
                  <br />
                </p>
                <p className="credits-name">Levada Denys</p>
                <p className="credits-role">Frontend + Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsPage;