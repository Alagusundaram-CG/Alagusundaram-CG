
import React from 'react';

export default function AboutContent() {
    return (
        <section className="about-section">
		<div className="auto-container">
			
			<div className="images-gallery">
				<div className="row clearfix">
					
					<div className="column col-lg-4 col-md-6 col-sm-4">
						<div className="image wow fadeInLeft" data-wow-delay="0ms">
							<img src="../images/resource/about-1.avif" alt="" />
						</div>
					</div>
					
					<div className="column col-lg-4 col-md-6 col-sm-4">
						<div className="image wow fadeInLeft" data-wow-delay="300ms">
							<img src="../images/resource/about-1.jpg" alt="" />
						</div>
					</div>
					
					<div className="column col-lg-4 col-md-6 col-sm-4">
						<div className="image wow fadeInLeft" data-wow-delay="0ms">
							<img src="../images/resource/about-3.avif" alt="" />
						</div>
					</div>
					
				</div>
			</div>

			<div className="lower-content">
				<div className="row clearfix">
					
					
					<div className="column col-lg-12 col-md-12 col-sm-12" align="center">
						<h3 style={{color:'#ff7d00'}}><blockquote>"Only a great team can build, great products"</blockquote></h3>
					</div>
				</div>
			</div>
				
			<div className="lower-content">
				<div className="row clearfix">
					
					
					<div className="column col-lg-12 col-md-12 col-sm-12">
						<h3>Welcome to ChennaiGames Studio <blockquote>"Where Mobile Gaming Magic Happens!"</blockquote></h3>
					</div>
					
					
					<div className="column col-lg-12 col-md-12 col-sm-12 about-content-div" style={{paddingLeft:'50px'}}>
						<ul>
						<li><p className="about-content">We are a passionate team of game developers based in Chennai, India, committed to crafting immersive and entertaining games for players worldwide.</p></li>

						<li><p className="about-content">At ChennaiGames Studio, we believe in the power of gaming to inspire, engage, and connect people across diverse cultures and backgrounds. With a blend of creativity, innovation, and technical expertise, we strive to deliver top-quality mobile games that leave a lasting impression.</p></li>

						<li><p className="about-content">Our journey began with a shared love for gaming and a vision to create exceptional experiences that resonate with players of all ages. Since our inception, we have worked tirelessly to push the boundaries of mobile game development, leveraging cutting-edge technologies and embracing emerging trends to stay ahead of the curve.</p></li>

						<li><p className="about-content">What sets us apart is our unwavering dedication to excellence in every aspect of game development. From concept ideation and design to programming, testing, and optimization, we pour our hearts and souls into every project to ensure it meets the highest standards of quality and polish.</p></li>

						<li><p className="about-content">But our success wouldn't be possible without the support of our incredible community of players, whose feedback and enthusiasm drive us to continuously improve and innovate. Whether you're a casual gamer looking for a quick thrill or a hardcore enthusiast seeking a deeper challenge, we have something for everyone in our diverse portfolio of games.</p></li>

						<li><p className="about-content">As we look to the future, our commitment remains steadfast: to push the boundaries of creativity, to inspire joy and excitement, and to bring people together through the universal language of gaming. Join us on this exhilarating journey, and let's create unforgettable gaming experiences together!</p></li>

						</ul>
					</div>
				</div>
			</div>
			
		</div>
	</section>
    )
}