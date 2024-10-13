/* global $ */
import React, { useEffect } from 'react';
import OurGamesData from '../../data/ourgames.json';
import { Link } from 'react-router-dom';

export default function OurGamesList() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        if ($('.tabs-box').length) {
            $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).is(':visible')) {
                    return false;
                } else {
                    target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                    $(this).addClass('active-btn');
                    target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                    target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                    $(target).fadeIn(300);
                    $(target).addClass('active-tab');
                }
            });
        }
    }, []);
    return (
        <section className="matches-section">
            <div className="auto-container">
                <div className="matches-info-tabs">

                    <div className="matches-tabs tabs-box">


                        <ul className="tab-btns tab-buttons clearfix">
                            {/* <li data-tab="#prod-all" className="tab-btn active-btn"><span>Our Games</span></li> */}
                            {/* <li data-tab="#prod-android" className="tab-btn"><span>Android</span></li>
                            <li data-tab="#prod-ios" className="tab-btn"><span>iOS</span></li>
                            <li data-tab="#prod-amazontv" className="tab-btn"><span>Amazon TV</span></li>
                            <li data-tab="#prod-jiotv" className="tab-btn"><span>Jio TV</span></li> */}
                        </ul>


                        <div className="tabs-content">


                            <div className="tab active-tab" id="prod-all">
                                <div className="content">
                                    {OurGamesData.map((data, index) => (
                                        <div className="matches-block" key={index}>
                                            <div className="inner-block">
                                                <div className="row clearfix">
                                                    <div className="match-column col-lg-3 col-md-3 col-sm-3 col-12">
                                                        <div className="inner-column">
                                                            <div className="row clearfix">
                                                                <div className="match-item col-lg-12 col-md-6 col-sm-12">
                                                                    <div className="inner-item" align="center">
                                                                        <img className="game-logo"
                                                                            src={data.thumbnail_image}
                                                                            alt={data.title} />
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-column col-lg-9 col-md-9 col-sm-9 col-12">
                                                        <div className="inner-column">
                                                            <h2><Link to={data.link} onClick={() => { scrollToTop(); }}>{data.title}</Link></h2>
                                                            <div className="date">{data.description}</div>
                                                            <div className="title"></div>
                                                            <ul className="tags">

                                                            </ul>
                                                            <div className='row'>
                                                                {data.download_endpoints.length > 0 ? (
                                                                    data.download_endpoints.map((item, order) => {
                                                                        if (item.source === 'android') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Get it on Google Play' src='./images/playstore.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'googletv') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Get it on Google TV' src='./images/googletv.png' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'appletv') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Get it on Apple Tv' src='./images/apple_tv.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'poki') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on POKI' src='./images/poki.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'crazygames') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on CrazyGames' src='./images/crazygames.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'amazon') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Amazon Games' src='./images/amazon.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'y8') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Y8 Games' src='./images/y8.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'kongregate') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Kongregate' src='./images/kongregate.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'jio') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Jio Games' src='./images/jio.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'gamepix') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Gamepix' src='./images/gamepix.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'nowgg') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Now.gg' src='./images/nowgg.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else if (item.source === 'yandex') {
                                                                            return (
                                                                                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                                                    <a href={item.url} target='_blank' rel="noreferrer"><img alt='Play on Yandex' src='./images/yandex.avif' style={{ width: '100%', padding: '10px' }} /></a>
                                                                                </div>
                                                                            );
                                                                        }
                                                                        else {
                                                                            // Return null if the item.source doesn't match any condition
                                                                            return null;
                                                                        }
                                                                    })
                                                                ) : (
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <ul className="tags">
                                                                            <li>Coming Soon</li>
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}