import React from 'react';
import GalleryData from '../../data/gallery.json';

export default function GalleryCard() {
    return (
        <section className="gallery-section-three">

            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Work Gallery</div>
                    {/* <h2>game trailer videos</h2> */}
                </div>
                <div className="row clearfix">
                    {GalleryData.work_gallery.map((data, index) => (
                        <div className="gallery-item col-lg-4 col-md-4 col-sm-4 wow fadeInLeft" data-wow-delay="0ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src={`./images/gallery/${data.thumbnail}`} alt="" />

                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                {/* <a href="/" className="link"><span className="icon flaticon-unlink"></span></a> */}
                                                <a href={`./images/gallery/${data.preview}`} data-fancybox="gallery-2" data-caption="" className="link">
                                                    {data.type === 'video' && <span className="icon flaticon-media-play-symbol"></span>}
                                                    {data.type === 'image' && <span className="icon fa fa-image"></span>}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <br />
                <div className="sec-title centered">
                    <div className="title">Team / Event Gallery</div>
                </div> */}
                {/* <div className="row clearfix">
                    {GalleryData.team_gallery.map((data, index) => (
                        <div className="gallery-item col-lg-4 col-md-4 col-sm-4 wow fadeInLeft" data-wow-delay="0ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src={`./images/gallery/${data.thumbnail}`} alt="" />

                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                
                                                <a href={`./images/gallery/${data.preview}`} data-fancybox="gallery-2" data-caption="" className="link">
                                                    {data.type === 'video' && <span className="icon flaticon-media-play-symbol"></span>}
                                                    {data.type === 'image' && <span className="icon fa fa-image"></span>}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

        </section>
    )
}