/* global $ */
import React, { useEffect } from 'react';
import { logEvent } from '../../utils/google_analytics';

export default function GameTrailers() {
    useEffect(() => {
        if($('.lightbox-image').length) {
            $('.lightbox-image').fancybox({
                openEffect  : 'fade',
                closeEffect : 'fade',
                helpers : {
                    media : {}
                }
            });
        }
    }, []);
    return (
        <section className="gallery-section" style={{backgroundImage:"url(images/background/2.avif)"}}>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Watch our</div>
                    <h2>game trailer videos</h2>
                </div>

                <div className="row clearfix" align="center">
                    <div className="column col-lg-6 col-md-12 col-sm-12">
                        {/* <div className="gallery-block">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src="images/gallery/4.jpg" alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <a href="https://www.youtube.com/watch?v=vO2RZotr-UY"
                                                className="lightbox-image play-box"><span className="flaticon-play-button"><i
                                                    className="ripple"></i></span></a>
                                            <div className="content">
                                                
                                                <h2><a href="https://www.youtube.com/watch?v=vO2RZotr-UY"
                                                    className="lightbox-image">MR Racer</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="gallery-block-two">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image hvr-bob">
                                    <img src="images/gallery/4.avif" alt="" />
                                    <div className="overlay-box">
                                        <a href="https://www.youtube.com/watch?v=aA2D67S4aMc"
                                            className="lightbox-image overlay-link" onClick={() =>logEvent('MR_RACER_TRAILER','click','Game Trailers')}>&nbsp;</a>
                                        <h3><span className="icon flaticon-play-button"></span>MR Racer</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="column col-lg-6 col-md-12 col-sm-12">

                        <div className="gallery-block-two">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image hvr-bob">
                                    <img src="images/gallery/5.avif" alt="" />
                                    <div className="overlay-box">
                                        <a href="https://www.youtube.com/watch?v=WwFLWQ6dPbo"
                                            className="lightbox-image overlay-link" onClick={() =>logEvent('POR_TRAILER','click','Game Trailers')}>&nbsp;</a>
                                        <h3><span className="icon flaticon-play-button"></span> POR - (BATTLEGROUND)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-block-two">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image hvr-bob">
                                    <img src="images/gallery/6.avif" alt="" />
                                    <div className="overlay-box">
                                        <a href="https://www.youtube.com/watch?v=MAluzf9kmTU"
                                            className="lightbox-image overlay-link" onClick={() =>logEvent('EMOJI_SMASHER_TRAILER','click','Game Trailers')}>&nbsp;</a>
                                        <h3><span className="icon flaticon-play-button"></span> Emoji Smasher</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}