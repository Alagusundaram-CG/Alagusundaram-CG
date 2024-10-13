import React from 'react';
import Social from '../social';

export default function ContactUsForm() {
    return (
		<section className="contact-form-section style-two">
        <div className="auto-container">
            <div className="row clearfix">
                
                
                <div className="title-column col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft" data-wow-delay="0ms">
                        
                        <div className="sec-title">
                            <div className="title">Contact With Us</div>
                            <h2>we’re here to help you</h2>
                        </div>
                        <div className="text">If you have any business enquiry, kindly contact us <a href='mailto:hello@chennaigames.com?'>hello@chennaigames.com</a></div>
                        <ul className="social-icons">
                            <Social/>
                        </ul>
                    </div>
                </div>
                
               
                {/* <div className="form-column col-lg-7 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInRight" data-wow-delay="0ms">
                        
                        
                        <div className="default-form contact-form">

                            <form method="post" action="sendemail.php" id="contact-form">
                                <div className="row clearfix">                                    
                                    <div className="col-md-6 col-sm-12 form-group">
                                        <input type="text" name="username" placeholder="Full name" required=""/>
                                    </div>
                                    
                                    <div className="col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Email address" required=""/>
                                    </div>

                                    <div className="col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="Write a Message"></textarea>
                                    </div>

                                    <div className="col-md-12 col-sm-12 form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div> */}
                
            </div>
        </div>
    </section>
    )
}