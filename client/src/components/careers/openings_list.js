import React from 'react';
import OppeningsData from '../../data/careers.json';

export default function CurrentOpenings() {
    return (
        <section className="players-section players-page-section" style={{borderTop: "1px solid #848484"}}>
		<div className="auto-container">

            <div className="sec-title centered">
				
				<h2>Job openings</h2>
			</div>
			
			<div className="row clearfix">
				
			{OppeningsData.map((data, index) => (
				<div className="player-block col-lg-4 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0ms">
					<div className="inner-box hvr-bob">
						<div className="lower-content">
							<h3 style={{color:'#ff7d00'}}>{data.role}</h3>
							<div className="level">
								<ul style={{listStyle:'unset'}}>
									{data.description.map((item, index) => (
										<li style={{fontSize:'13px'}} key={index}>{item}</li>
									))}
								</ul>
							</div>
							<ul className="social-icons">
								<div className="level">Experience: {data.experience}</div>
								<div className="level">Skills: {data.skills}</div>    
							</ul>
						</div>
					</div>
				</div>
			))}
			</div>
		</div>
	</section>
    )
}