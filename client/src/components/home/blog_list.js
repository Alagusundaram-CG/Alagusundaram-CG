/* global $ */
import React, { Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

export default function Banner() {
    useEffect(() => {
        
    }, []);
    return (
        <section class="news-section">
			<div class="auto-container">
			
				<div class="sec-title centered">
					<div class="title">Recent Articles</div>
					<h2>Latest Posts</h2>
				</div>

				<div class="row ">
					<div class="news-block col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0ms"
						data-wow-duration="1500ms">
						<div class="inner-box hvr-bob">
							<div class="image">
								<a href="blog-mr_racer.html"><img src="images/resource/news-1.jpg" alt="" /></a>
							</div>
							<div class="lower-content">
								<div class="post-date">20 Feb 2024</div>
								<h3><a href="blog-mr_racer.html">The Ultimate Mobile Racing Game for Casual Gamers</a>
								</h3>
							</div>
						</div>
					</div>

					<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
						data-wow-duration="1500ms">
						<div class="inner-box hvr-bob">
							<div class="image">
								<a href="blog-mr_racer.html"><img src="images/resource/news-1.jpg" alt="" /></a>
							</div>
							<div class="lower-content">
								<div class="post-date">20 Feb 2024</div>
								<h3><a href="blog-mr_racer.html">The Ultimate Mobile Racing Game for Casual Gamers</a>
								</h3>
							</div>
						</div>
					</div>

					<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
						data-wow-duration="1500ms">
						<div class="inner-box hvr-bob">
							<div class="image">
								<a href="blog-mr_racer.html"><img src="images/resource/news-1.jpg" alt="" /></a>
							</div>
							<div class="lower-content">
								<div class="post-date">20 Feb 2024</div>
								<h3><a href="blog-mr_racer.html">The Ultimate Mobile Racing Game for Casual Gamers</a>
								</h3>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
    )
}