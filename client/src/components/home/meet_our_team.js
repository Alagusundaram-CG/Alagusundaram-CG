/* global $ */
import React, { Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <section class="welcome-section">
        <div class="auto-container">
        
            <div class="sec-title centered">
                <div class="title">Meet our</div>
                <h2>Game Development Team</h2>
            </div>

            <div class="row clearfix">

               
                <div class="default-portfolio-item col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div class="inner-box hvr-bob">
                        <figure class="image-box"><img src="images/gallery/1.avif" alt=""/></figure>
                        
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="/">Blender <br/> Masters</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="default-portfolio-item col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="300ms"
                    data-wow-duration="1500ms">
                    <div class="inner-box hvr-bob">
                        <figure class="image-box"><img src="images/gallery/2.avif" alt=""/></figure>
                        
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="/">Unity <br/> Wizards</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="default-portfolio-item col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="600ms"
                    data-wow-duration="1500ms">
                    <div class="inner-box hvr-bob">
                        <figure class="image-box"><img src="images/gallery/3.avif" alt=""/></figure>
                        
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="/">Server <br/> Samurais</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
            <div class="lower-box">
                <div class="text">We're a dynamic and youthful team driven by our passion for crafting immersive and
                    high-quality games that foster strong engagement with players. Situated in the bustling hub of
                    Chennai, we're an emerging and lively mobile gaming studio dedicated to prioritizing the player
                    experience above all else.</div>
                <a href="about-clan.html" class="theme-btn btn-style-one"><span class="btn-title">About
                        us</span></a>
            </div>

        </div>
    </section>
    )
}