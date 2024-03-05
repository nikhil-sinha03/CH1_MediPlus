import ServicesListing from "../../types/Homepage/ServicesListing";
import ServiceDetails from "../../types/Services/ServiceDetails";

const ServicesList = (props: ServicesListing): JSX.Element => {
    return (
        <section className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>{props.servicesListing.serviceListingIntro}</h2>
                            <img src="img/section-img.png" alt="#" />
                            <p>{props.servicesListing.serviceListingDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.servicesListing.serviceslist?.results.map((service : ServiceDetails) => (
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-service">
                                <i className={service.iconClass}></i>
                                <h4><a href={`/service/${encodeURIComponent(service.id)}`}>{service.name}</a></h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesList;