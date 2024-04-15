import EmergencyCare from "../../types/Homepage/EmergencyCare";

const CallAction = (props:EmergencyCare): JSX.Element => {
  return (
    <section className="call-action overlay" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="content">
              <h2>
                {props.emergencyCare.emergencyCareTitle}
              </h2>
              <p>
                {props.emergencyCare.emergencyCareDescription}
              </p>
              <div className="button">
                <a className="btn" href={`/contact`}>
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction;
