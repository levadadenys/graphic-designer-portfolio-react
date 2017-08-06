import React from 'react';
import HamburgerButton from './../components/sidebarComponents/HamburgerButton'
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
            <HamburgerButton/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 "/>
          <div className="col-md-4">
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque <mark>laudantium</mark>, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, <mark>sed quia consequuntur</mark>
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut <mark>labore</mark> et
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
              quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi </p>
          </div>
          <div className="col-md-2">
            <h2>Абз. 1.10.33
              <span className="red-marker">"de Finibus Bonorum et Malorum"</span>,
              написанный Цицероном в 45 году н.э.</h2>
          </div>
          <div className="col-md-4">
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis aut
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
              <div className="col-md-9 zindex">
                <h1 className="branding">Branding |not|<br />branded brands...
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
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;