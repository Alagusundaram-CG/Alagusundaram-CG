/* global $ */
import React, { useEffect} from 'react';
import HomeBannerData from '../../data/homebanner.json';

export default function Banner() {
    useEffect(() => {
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                smartSpeed: 500,
                autoplay: 6000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:1
                    },
                    1024:{
                        items:1
                    }
                }
            });
        }
        //Ensure Owl Carousel instance is destroyed when component unmounts
        return () => {
            $('.banner-carousel').trigger('destroy.owl.carousel').removeClass('owl-loaded');
            $('.banner-carousel').find('.owl-stage-outer').children().unwrap();
        };
    }, []);
    return (
        <section className="banner-section">
            <div className="banner-carousel owl-theme owl-carousel">
                {HomeBannerData.map((image, index) => (
                    <div className="slide-item" key={index}>
                        <div className="image-layer" style={{ backgroundImage: `url(./images/main-slider/${image})` }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}