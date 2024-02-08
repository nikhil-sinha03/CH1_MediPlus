import Header from "../../types/Common/header-type";

const Header = (props:Header) => {
  return(
    <header className="header">
			<div className="header-inner">
				<div className="container">
					<div className="inner">
						<div className="row">
							<div className="col-lg-3 col-md-3 col-12">
								<div className="logo">
									<a href="index.html"><img src={props.header.logo.results[0].fileUrl} alt="#"/></a>
								</div>
								<div className="mobile-nav"></div>
							</div>
							<div className="col-lg-7 col-md-9 col-12">
								<div className="main-menu">
									<nav className="navigation">
									<ul className="nav menu">
											{props.header.menu.results.map((o,i) => (
												<li className="" key={i}>
													<a href={o.url}>
														{o.title}
														{o.haveChild && <i className="icofont icofont-rounded-down"></i>}
													</a>

													{o.haveChild && (
                            <ul className="dropdown">
                              {o.childMenu.results.map((c, k) => (
                                <li key={k}>
                                  <a href={c.url}>{c.title}</a>
                                </li>
                              ))}
                            </ul>
                          )}
												</li>
											))}
										</ul>
									</nav>
								</div>
							</div>
							<div className="col-lg-2 col-12">
								<div className="get-quote">
									<a href="#" className="btn">Book Appointment</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
  )
}

export default Header;