import ServiceDetails from "../../types/Services/ServiceDetails";
import Image from 'next/image'

type Props = {
	ServiceDetailsData: ServiceDetails
}

const ServiceDetailsData = ({ ServiceDetailsData }: Props) => {
	const detailData = ServiceDetailsData;
	console.log(detailData);
	return (
		<div>
			<div className="breadcrumbs overlay">
				<div className="container">
					<div className="bread-inner">
						<div className="row">
							<div className="col-12">
								<h2>{detailData.smallTitle}</h2>
								<ul className="bread-list">
									<li><a href="/">Home</a></li>
									<li><i className="icofont icofont-simple-right"></i></li>
									<li className="active">{detailData.smallTitle}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="pf-details section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="inner-content">
								<div className="image-slider">
									<div className="pf-details-slider owl-carousel owl-theme owl-loaded">
										<div className="owl-stage-outer">
											<div className="owl-stage">
												{/*<div className="owl-item cloned">
													<img src="img/call-bg.jpg" alt="#" />
												</div>
												<div className="owl-item">
													<img src="img/call-bg.jpg" alt="#" />
												</div>*/}
												<Image
													alt=''
													src={detailData.introImage.results[0].fileUrl}
													width='500'
													height='500'
												/>
											</div>
										</div>

									</div>
								</div>
								<div className="body-text">
									<h3>{detailData.smallTitle}</h3>
									<p>{detailData.description}</p>
									<p>ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna to in aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. </p>
									<p>ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod. dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.</p>
									<div className="share">
										<h4>Share Now -</h4>
										<ul>
											<li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ServiceDetailsData;