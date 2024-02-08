import WhoWeAre from "../../types/Homepage/WhoWeAre";
import RichText from "../Common/richText-component";

const AboutUs = (props:WhoWeAre): JSX.Element => {
  return (
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>
                {props.whoWeAre.whoWeAreTitle}
              </h2>
              <img src="img/section-img.png" alt="#" />
              <p>
              {props.whoWeAre.whoWeAreDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="choose-left">
              <h3>Who We Are</h3>
              <RichText richText={props.whoWeAre.whoWeAreContent}/>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    {props.whoWeAre.whoWeAreHighlightLeft.split('\n')
                      .map((o, i) => (
                        <li key={i}>
                          <i className="fa fa-caret-right"></i>
                          {o}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    {props.whoWeAre.whoWeAreHighlightRight.split('\n')
                      .map((o, i) => (
                        <li key={i}>
                          <i className="fa fa-caret-right"></i>
                          {o}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="choose-right"
              style={{ backgroundImage: `url(${props.whoWeAre.whoWeAreIntroVideoThumbnail.results[0].fileUrl})` }}
            >
              <div className="video-image">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                <a href={props.whoWeAre.whoWeAreIntroVideoLink} className="video video-popup mfp-iframe">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
