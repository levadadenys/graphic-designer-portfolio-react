import React from 'react';

import HamburgerButton from './../components/sidebarComponents/HamburgerButton';

class AboutPage extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {sections: props.sections, sprites: props.sprites};
  }

  render () {
    return (
      <div className="col-md-10 col-xs-12 col-sm-12 ">
        <div className="row">
          <div className="col-md-8 col-xs-8 col-sm-8">
            <div className="logo-container img-logo-ww" />
          </div>
          <div className="col-xs-4 col-sm-4 hidden-lg hidden-md">
            <HamburgerButton />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 " />
          <div className="col-md-4">
            <p>"Władek Werkstatt" ( π ) - is a personal
              <mark>digital design brand</mark>
              , founded
              in 2017 by Liakh Vladislav.
            </p>
            <p>My main goal - avant-garde design practices implementation for
              modern visual
              communication industry. I consider my self as
              a &nbsp;
              <mark>Swiss</mark>
              &nbsp;,&nbsp;
              <mark>Bauhaus</mark>
              &nbsp;and
              <mark>Constructivism</mark>
              evangelist, that is commonly exposed on my non-commercial works.
              But I don't usually confine myself to one style.
              I prefer mixing, modernizing and injecting one to another. So
              it'll be a good deal for you to work with me.
            </p>
          </div>
          <div className="col-md-2">
            <h2>Абз. 1.10.33 <span className="red-marker">"de Finibus Bonorum et Malorum"</span>,
              написанный Цицероном в 45 году н.э.</h2>
          </div>
          <div className="col-md-4">
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum
              et
              dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut
              rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus,
              ut aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat."</p>
          </div>
        </div>
        <div className="row scr2">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-9 z-index">
                <h1 className="branding">Branding |not|*<br />branded brands...
                </h1>
                <h2>Branded brands too...</h2>
                <div className="row">
                  <div className="col-md-3">
                    <p>"On the other hand, we denounce with righteous
                      indignation
                      and dislike men who are so beguiled and
                      demoralized by the charms of pleasure of the moment, so
                      blinded by desire, that they cannot foresee
                      the pain and trouble that are bound to ensue; and equal
                      blame belongs to those who fail in their
                      duty through weakness of will, which is the same as saying
                      through shrinking from toil and pain.
                      These cases are perfectly simple and </p>
                  </div>
                  <div className="col-md-3">
                    <p>ish. In a free hour, when our power of choice is
                      untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure is to be
                      welcomed and every pain avoided. But in
                      certain circumstances and owing to the claims of duty or
                      the
                      obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man
                      therefore always holds in these matters to this
                      principle</p>
                  </div>
                  <div className="col-md-3">
                    <p>f selection: he rejects pleasures to secure other greater
                      pleasures, or else he endures pains to
                      avoid worse pains."</p>
                  </div>
                </div>

              </div>
              <div className="col-md-3 img-block img-about" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>References
                </p>
                <ul>
                  <li>1. Korolkova A., <i>Zhivaya tipografika</i> [Live
                    typography]. Index Market Publ., 2011, ISBN
                    978-5-9901107-5-5
                  </li>
                  <li>2. Bychkov V. V., <i>Estetika</i> [Aesthetics]. Gardariki
                    Publ., 2004,
                  </li>
                  <li>3. Aaron Walter <i>Emotional Web-design</i> [Emocionalniy
                    Web-dizayn]. A Book Apart., ISBN
                    978-5-91657-386-2
                  </li>
                  <li>4. Ethan Marcott <i>Responsive Web-design</i> [Otzivchiviy
                    web-dizayn]. A Book Apart., 2012, ISBN
                    978-5-91657-385-5
                  </li>
                  <li>5. Golubeva O. L. <i>Osnovyi kompozitsii. Uchebnoe
                    posobie</i> [Basics of composition. Tutorial].
                    Fine Arts Publ., 2001
                  </li>
                  <li>6. Jeremy Keith & Rachel Andrew <i>HTML5 FOR WEB
                    DESIGNERS</i> [HTML5 Dlya WEB dizaynerov]. A Book
                    Apart., ISBN
                    978-5-91657-596-5
                  </li>
                  <li>7. Dan Cederholm <i>CSS3 FOR WEB DESIGNERS</i> [CSS3 Dlya
                    WEB dizaynerov]. A Book
                    Apart., ISBN
                    978-5-91657-595-8
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;