import React from 'react';
import Social from '../social';

export default function CareersInfo() {
    return (
		<section className="player-info-section">
		<div className="auto-container">
			<div className="row clearfix">
            	
                <div className="text-column col-lg-6 col-md-6 col-sm-6">
                	<div className="inner wow fadeInRight">
                    	<div className="title-box">
                        	<div className="user-title">Level up your career</div>
                            <div className="user-info">join our game dev squad!</div>
                        </div>
                        <div className="text-career" style={{fontSize: '16px',lineHeight: '30px',fontWeight: '400',color: '#787878',margin: 0}}>Join our dynamic team and be part of creating the next generation of immersive gaming experiences. We are always looking for talented and passionate individuals to bring their unique skills to our innovative projects. Explore our current openings and find your perfect fit.</div>
                        <br/>
                        <div className='text-career' style={{fontSize: '16px',lineHeight: '30px',fontWeight: '400',color: '#787878',margin: 0}}>Send your details to <a href='mailto:hello@chennaigames.com?'>hello@chennaigames.com.</a> We will take it forward from there!</div>
                        <ul className="social-icons">
							<Social/>
						</ul>
                    </div>
                </div>
                
                <div className="image-column col-lg-6 col-md-6 col-sm-6">
                	<div className="inner wow fadeInLeft">
                    	<figure className="image"><img src="images/resource/about-4.avif" alt=""/></figure>
                    </div>
                </div>
            </div>
		</div>
	</section>
    )
}