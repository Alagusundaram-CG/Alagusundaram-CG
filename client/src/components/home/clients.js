/* global $ */
import React, { useEffect} from 'react';

export default function Clients() {
    useEffect(() => {
        if ($('.sponsors-carousel').length) {
            $('.sponsors-carousel').owlCarousel({
                loop:true,
                margin:40,
                nav:true,
                smartSpeed: 500,
                autoplay: 4000,
                navText: [ '<span className="fa fa-angle-left"></span>', '<span className="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:3
                    },
                    480:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:4
                    },
                    1024:{
                        items:5
                    }
                }
            });    		
        }
    }, []);
    return (
        <section className="sponsors-section">
			<div className="auto-container">
            <div className="sec-title centered">
                    <div className="title">our Good</div>
                    <h2>Friends</h2>
                </div>
				<div className="sponsors-outer">
					
					<ul className="sponsors-carousel owl-carousel owl-theme">
						<li className="slide-item">
							<figure className="image-box"><img src="images/clients/1.avif" alt=""/></figure>
						</li>
						<li className="slide-item">
							<figure className="image-box"><img src="images/clients/2.avif" alt=""/></figure>
						</li>
						
						<li className="slide-item">
							<figure className="image-box"><img src="images/clients/4.avif" alt=""/></figure>
						</li>
						<li className="slide-item">
							<figure className="image-box"><img src="images/clients/5.avif" alt=""/></figure>
						</li>
						<li className="slide-item">
							<figure className="image-box"><img src="images/clients/6.avif" alt=""/></figure>
						</li>
						<li className="slide-item">
							<figure className="image-box"><img src="images/clients/7.avif" alt=""/></figure>
						</li>
                        <li className="slide-item">
							<figure className="image-box"><img src="images/clients/8.avif" alt=""/></figure>
						</li>
					</ul>
				</div>

			</div>
		</section>
    )
}