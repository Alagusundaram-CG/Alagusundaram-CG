/* global $ */
import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function GameTrailers() {
    useEffect(() => {
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                smartSpeed: 500,
                autoplay: 5000,
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
    }, []);
    return (
        <section class="facts-section">

            <div class="title-boxed" style={{ backgroundImage: "url(images/mr_racer/car_v4.png)" }}>
                <div class="auto-container">
                    <div class="content wow fadeInLeft" data-wow-delay="0ms">
                        <h2>Gaming Innovations <br /> from the Heart of <br /> Chennai</h2>

                        <br /><br /><br /><br />
                    </div>
                </div>
            </div>



            <div class="lower-boxed">
                <div class="auto-container">
                    <div class="row clearfix">


                        <div class="counter-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">


                                <div class="featured-block">
                                    <div class="inner-box">
                                        <div class="icon-box">
                                            <span class="icon flaticon-joystick"></span>
                                        </div>
                                        <h3>785,000</h3>
                                        <div class="text">Games playerd by 6,388 people in 7 days</div>
                                    </div>
                                </div>


                                <div class="featured-block">
                                    <div class="inner-box">
                                        <div class="icon-box">
                                            <span class="icon flaticon-man"></span>
                                        </div>
                                        <h3>63,000</h3>
                                        <div class="text">Players are available to hit you live</div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="testimonial-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInRight" data-wow-delay="0ms">

                                <div class="single-item-carousel owl-carousel owl-theme">


                                    <div class="testimonial-block">
                                        <div class="inner-box">
                                            <div class="quote-icon flaticon-quote-1"></div>
                                            <div class="text">There are many variations of passages of lorem ipsum
                                                available, but the majority have suffered alteration in some form by
                                                injected.</div>
                                            <div class="author">- XXXXXXX, WINZO</div>
                                        </div>
                                    </div>


                                    <div class="testimonial-block">
                                        <div class="inner-box">
                                            <div class="quote-icon flaticon-quote-1"></div>
                                            <div class="text">There are many variations of passages of lorem ipsum
                                                available, but the majority have suffered alteration in some form by
                                                injected.</div>
                                            <div class="author">- XXXXXXX, WINZO</div>
                                        </div>
                                    </div>


                                    <div class="testimonial-block">
                                        <div class="inner-box">
                                            <div class="quote-icon flaticon-quote-1"></div>
                                            <div class="text">There are many variations of passages of lorem ipsum
                                                available, but the majority have suffered alteration in some form by
                                                injected.</div>
                                            <div class="author">- XXXXXXX, WINZO</div>
                                        </div>
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