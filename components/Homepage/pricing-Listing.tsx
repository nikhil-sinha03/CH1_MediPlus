import PricingIntro from "../../types/Homepage/PricingIntro";
import AllTaxonomy_Services from "../../types/Homepage/TaxonomyList";
import PricingDetails from "../../types/Pricing/PricingDetails";
import TaxonomyDetails from "../../types/Pricing/TaxonomyDetails";

const PriceListing = (props: PricingIntro, taxonomyProps: AllTaxonomy_Services ): JSX.Element => {
    return (
        <section className="pricing-table section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>{props.pricingIntro.pricingIntro}</h2>
                            <img src="img/section-img.png" alt="#" />
                            <p>{props.pricingIntro.pricingDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.pricingIntro.pricingCategory?.results.map((pricing : PricingDetails) => (
					<div className="col-lg-4 col-md-12 col-12">
						<div className="single-table">
							<div className="table-head">
								<div className="icon">
									<i className={pricing.iconClass}></i>
								</div>
								<h4 className="title">{pricing.title}</h4>
								<div className="price">
									<p className="amount">${pricing.cost}<span>/ Year</span></p>
								</div>	
							</div>
							{taxonomyProps.allTaxonomy_mediplusPricingServices?.results?.map((taxomomy : TaxonomyDetails) => (
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>{taxomomy.id.split('_')[2]}</li>
                                    {/*<li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Nullam interdum enim</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>*/}
							    </ul>
                            ))}
							<div className="table-bottom">
								<a className="btn" href="#">Buy Now</a>
							</div>
						</div>
					</div>
					 ))}
					{/*<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<!-- Table Head -->
							<div class="table-head">
								<div class="icon">
									<i class="icofont-file-midi"></i>
								</div>
								<h4 class="title">Standard</h4>
								<div class="price">
									<p class="amount">$299<span>/ Year</span></p>
								</div>	
							</div>
							<!-- Table List -->
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i class="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Donec ultricies metus</li>
								<li class="cross"><i class="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Buy Now</a>
							</div>
							<!-- Table Bottom -->
						</div>
					</div>
					<!-- End Single Table-->
					<!-- Single Table -->
					<div class="col-lg-4 col-md-12 col-12">
						<div class="single-table">
							<!-- Table Head -->
							<div class="table-head">
								<div class="icon">
									<i class="icofont-briefcase-2"></i>
								</div>
								<h4 class="title">Premium</h4>
								<div class="price">
									<p class="amount">$399<span>/ Year</span></p>
								</div>	
							</div>
							<!-- Table List -->
							<ul class="table-list">
								<li><i class="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i class="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i class="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li><i class="icofont icofont-ui-check"></i>Donec ultricies metus</li>
								<li><i class="icofont icofont-ui-check"></i>Pellentesque eget nibh</li>
							</ul>
							<div class="table-bottom">
								<a class="btn" href="#">Buy Now</a>
							</div>
							<!-- Table Bottom -->
						</div>
					</div> */}
					
				</div>
            </div>
        </section>
    );
}

export default PriceListing;