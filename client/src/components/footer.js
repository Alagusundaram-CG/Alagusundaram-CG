import React from 'react';
import Social from './social';
import { Link } from 'react-router-dom'
export default function Footer() {

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

	}

	return (
		<footer className="main-footer">
			<div className="auto-container">

				<div className="widgets-section">
					<div className="row clearfix">


						<div className="column col-lg-3 col-md-6 col-sm-12">
							<div className="footer-widget logo-widget">
								<div className="logo" align="center">
									<Link to="/" onClick={() => { scrollToTop(); }}><img src="../../images/logo_footer.avif" alt="Chennaigames Studio Private Limited" style={{ width: '100%', maxWidth: '250px' }} /></Link>
								</div>
							</div>
						</div>


						<div className="column col-lg-8 col-md-6 col-sm-12 col-12">
							<div className="footer-widget links-widget">
								<div className="widget-content">
									<div className="footer-title">
										<h2>Links</h2>
									</div>
									<div className="row clearfix">
										<div className="column col-lg-4 col-md-4 col-sm-4 col-4">
											<ul className="list">
												<li><Link to="/" onClick={() => { scrollToTop(); }}>Home</Link></li>
												<li><Link to="/about-us" onClick={() => { scrollToTop(); }}>About Us</Link></li>
												<li><Link to="/gallery" onClick={() => { scrollToTop(); }}>Gallery</Link></li>
											</ul>
										</div>
										<div className="column col-lg-4 col-md-4 col-sm-4 col-4">
											<ul className="list">
												<li><Link to="/ourgames" onClick={() => { scrollToTop(); }}>Our Games</Link></li>
												{/* <li><Link to="/blog" onClick={() => { scrollToTop(); }}>Blog</Link></li> */}
												<li><Link to="/careers" onClick={() => { scrollToTop(); }}>Careers</Link></li>
												<li><Link to="/contact-us" onClick={() => { scrollToTop(); }}>Contact Us</Link></li>
											</ul>
										</div>
										<div className="column col-lg-4 col-md-4 col-sm-4 col-4">
											<ul className="list">

												<li><Link to="/games" onClick={() => { scrollToTop(); }}>Web Games</Link></li>
												<li><Link to="/privacy_policy" onClick={() => { scrollToTop(); }}>Privacy Policy</Link></li>
												<li><Link to="/submit-game" onClick={() => { scrollToTop(); }}>Submit Your Game</Link></li>
											</ul>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="footer-bottom">
				<div className="auto-container">

					<div className="scroll-to-top scroll-to-target" data-target="html"><span
						className="flaticon-up-arrow" onClick={() => { scrollToTop(); }}></span></div>

					<div className="row clearfix">

						<div className="column col-lg-6 col-md-12 col-sm-12">
							<div className="copyright">&copy; Copyrights, 2024 All Rights Reserved</div>
						</div>

						<div className="column col-lg-6 col-md-12 col-sm-12">
							<ul className="social-icons">
								<Social />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}