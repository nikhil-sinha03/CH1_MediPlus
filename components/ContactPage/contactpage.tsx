import ContactDetails from "../../types/ContactPage/ContactData";

type Props = {
    ContactDetail: ContactDetails
}

const ContactPageData = ({ ContactDetail }: Props) => {
    const contactData = ContactDetail.contactPage;
    console.log(contactData);
    return (
        <div>
            <div className="breadcrumbs overlay">
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>{contactData.name}</h2>
                                <ul className="bread-list">
                                    <li><a href="/">Home</a></li>
                                    <li><i className="icofont icofont-simple-right"></i></li>
                                    <li className="active">{contactData.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact-us section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-us-left">
                                </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="contact-us-form">
								<h2>Contact With Us</h2>
								<p>If you have any questions please fell free to contact with us.</p>
								
								<form className="form" method="post" action="mail/mail.php">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
                                                
												<input type="text" name="name" placeholder="Name"/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="email" name="email" placeholder="Email"/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="phone" placeholder="Phone"/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="subject" placeholder="Subject"/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea name="message" placeholder="Your Message"></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group login-btn">
												<button className="btn" type="submit">Send</button>
											</div>
											<div className="checkbox">
												<label className="checkbox-inline"><input name="news" id="2" type="checkbox"/>Do you want to subscribe our Newsletter ?</label>
											</div>
										</div>
									</div>
								</form>
							</div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
					<div className="row">
						
						<div className="col-lg-4 col-12 ">
							<div className="single-info">
								<i className="icofont icofont-ui-call"></i>
								<div className="content">
									<h3>{contactData.phone}</h3>
									<p>{contactData.email}</p>
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-12 ">
							<div className="single-info">
								<i className="icofont icofont-google-map"></i>
								<div className="content">
									<h3>{contactData.addressLine1}</h3>
									<p>{contactData.addressLine2}</p>
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-12 ">
							<div className="single-info">
								<i className="icofont icofont-wall-clock"></i>
								<div className="content">
									<h3>{contactData.openingHoursLine1}</h3>
									<p>{contactData.openingHoursLine2}</p>
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

export default ContactPageData;