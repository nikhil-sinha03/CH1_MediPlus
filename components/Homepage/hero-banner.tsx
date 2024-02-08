import IntroBanner from '../../types/Homepage/IntroBanner'


const HeroBanner = (props:IntroBanner) => {
    return(
      <section className="slider">
        <div className="hero-slider">
          <div
            className="single-slider"
            style={{ backgroundImage: `url(${props.introBanner.introBannerImage?.results[0]?.fileUrl})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>{props.introBanner.introBannerTitle}</h1>
                    <p>{props.introBanner.introBannerDescription}</p>
                    <div className="button">
                      <a href={props.introBanner.introBannerLink} className="btn">Get Appointment</a>
                      <a href="#" className="btn primary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroBanner