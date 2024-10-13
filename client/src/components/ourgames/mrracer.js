import React from 'react';
import Marquee from "react-fast-marquee";
import MrRacerDownloadLinks from "../../data/ourgames.json";

export default function MrRacer() {
    return (
        <>
            <section id="section-hero" class="jarallax no-bottom" style={{ backgroundImage: 'url(./images/mr_racer/6_.avif)', backgroundSize: '100%' }}>
                {/* <img src="mr_racer/images/background/6.avif" class="jarallax-img" alt="" /> */}
                <div class="container position-relative z1000 wow fadeInDown">
                    <div class="row align-items-center position-relative" >
                        <div class="col-lg-12 text-center">
                            {/* <h1 class="ultra-big-2 text-uppercase">MR<span class="text-gradient">&nbsp;Racer</span></h1> */}

                        </div>
                        <div class="col-lg-12" style={{ padding: '10px' }}>
                            {/* <img src="images/mrracertitle_.avif" class="sm-img-fluid img-fluid mt-100 sm-mt-0 wow fadeInDown" alt="" /> */}
                            <img src="images/mr_racer/car_v5.gif" class="sm-img-fluid img-fluid mt-100 sm-mt-0 wow fadeInDown" alt="" />
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>
            <br />
            <br />
            <div class="row align-items-center position-relative">

                <div class="clearfix"></div>
                <div class="col-lg-1 col-2 offset-lg-2">
                    <img src="./images/mr_racer/arrow-up-right.avif" class="img-fluid wow fadeInLeft" alt="" />
                </div>
                <div class="col-lg-5 col-10">
                    <div class="position-relative">
                        <p class="lead no-bottom wow fadeInLeft white_font"><h3 class="no-bottom">
                            MR RACER is lightweight, with stunning visuals & highly optimised game for all your needs with better play experience!</h3></p>
                    </div>
                </div>

                <div class="spacer-single d-lg-none d-sm-block"></div>

                {/* <div class="col-lg-3" align="center"> */}

                {/* <a class="wow fadeInLeft" href='https://play.google.com/store/apps/details?id=com.chennaigames.mrracer.premium&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank'><img alt='Get it on Google Play' src='/images/playstore.avif' width="200" /></a> */}
                {/* </div> */}

            </div>
            <br />

            <Marquee speed={100}>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car0.avif" width="200" alt='BAE' />BAE</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car1.avif" width="200" alt='BIG DADDY' />BIG DADDY</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car14.avif" width="200" alt='METAL X' />METAL X</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car2.avif" width="200" alt='BOLT' />BOLT</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car3.avif" width="200" alt='MAXIMUS' />MAXIMUS</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car13.avif" width="200" alt='BIGFOOT' />BIGFOOT</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car4.avif" width="200" alt='HONEY' />HONEY</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car5.avif" width="200" alt='BURNO' />BURNO</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car6.avif" width="200" alt='SHADOW' />SHADOW</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car7.avif" width="200" alt='DRACO' />DRACO</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car8.avif" width="200" alt='STORM' />STORM</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car9.avif" width="200" alt='DEVIL' />DEVIL</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car10.avif" width="200" alt='TAURUS' />TAURUS</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car11.avif" width="200" alt='GOBLIN' />GOBLIN</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
                <span class="d-item-txt"><img src="images/mr_racer/thumb_cars/Car12.avif" width="200" alt='KNIGHTMARE' />KNIGHTMARE</span>
                <span class="d-item-display">
                    <i class="d-item-block"></i>
                </span>
            </Marquee>

            <hr style={{ borderTop: '1px solid rgb(50 50 50)' }} />
            <br />
            <div className="sec-title centered">
                {/* <div className="title">Work Gallery</div> */}
                <h2>Get it Here</h2>
            </div>
            <section id="section-about" class="no-bottom">
                <div class="container">
                    <div className='row'>
                        <div className='col-lg-1 col-md-2'></div>
                        <div className='col-lg-10 col-md-8'>
                            <div class="row align-items-center">

                                {MrRacerDownloadLinks[0].download_endpoints.map((item, index) => {

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
                                })}
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2'></div>
                    </div>
                    <hr style={{ borderTop: '1px solid rgb(50 50 50)' }} />
                    <br />
                    <div class="row align-items-center">
                        <div class="col-lg-6 position-relative">
                            <div class="images-deco-1">
                                <img src="images/mr_racer/shadow.avif" class="d-img-1" alt="" />
                                <div class="d-img-3 bg-color"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 position-relative" data-jarallax-element="-60" style={{ padding: '10px' }}>
                            <div class="position-relative z1000">
                                <h2 class="text-uppercase wow fadeInRight white_font" data-wow-delay=".3s">Collect 'EM All</h2>
                                <div class="row">
                                    <div class="col-lg-2 col-2">
                                        <img src="./images/mr_racer/arrow-up-left.avif" class="img-fluid" alt="" data-jarallax-element="30" />
                                    </div>
                                    <div class="col-lg-10 col-10">
                                        <p class="wow fadeInRight white_font" data-wow-delay=".4s">MR RACER features the most beautiful & stunning supercars, try to collect them all! Customise your cars with a wide range of Paints, Wheels & Name Board to make yours! Upgrade your car's performance to beat the rivals!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 position-relative" data-jarallax-element="-60" style={{ padding: '10px' }}>
                            <div class="position-relative z1000">
                                <h2 class="text-uppercase wow fadeInRight white_font" data-wow-delay=".3s">Locations</h2>
                                <div class="row">
                                    <div class="col-lg-10 col-10">
                                        <p class="wow fadeInRight white_font" data-wow-delay=".4s">MR RACER featured with 5 beautiful & challenging highways to race, so dare to drive on them! Race in more challenging highway & get rewarded accordingly.</p>
                                    </div>

                                    <div class="col-lg-2 col-2">
                                        <img src="./images/mr_racer/arrow-up-right.avif" class="img-fluid" alt="" data-jarallax-element="30" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 position-relative">
                            <div class="images-deco-1">
                                <img src="images/mr_racer/mount.avif" class="d-img-1" alt="" />
                                <div class="d-img-3 bg-color"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            <section id="section-about" class="no-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 position-relative">
                            <div class="images-deco-1">
                                <img src="images/mr_racer/game_modes.avif" class="d-img-1" alt="" />
                                <div class="d-img-3 bg-color"></div>
                            </div>
                        </div>
                        <div class="col-lg-6 position-relative" data-jarallax-element="-60" style={{ padding: '10px' }}>
                            <div class="position-relative z1000">
                                <h2 class="text-uppercase wow fadeInRight white_font" data-wow-delay=".3s">Game modes</h2>
                                <div class="row">
                                    <div class="col-lg-2 col-2">
                                        <img src="./images/mr_racer/arrow-up-left.avif" class="img-fluid" alt="" data-jarallax-element="30" />
                                    </div>
                                    <div class="col-lg-10 col-10">
                                        <p class="wow fadeInRight white_font" data-wow-delay=".4s">
                                            <b>Challenge mode :</b> 100 challenges to be completed, see where you stand!
                                            <br />
                                            <b>Endless mode :</b> Race in highway traffic & beat the best score if you can!
                                            <br />
                                            <b>Chase mode :</b> Best of race, chase your rivals & show them you are a master!
                                            <br />
                                            <b>Time trail & Free ride :</b> Sharp your skills to become a legend!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section class="no-top no-bottom">
                <div class="de-gradient-edge-top"></div>
                <img src="images/mr_racer/green_v1.avif" class="img-fluid" alt="" />
                <div class="de-gradient-edge-bottom"></div>
            </section>
        </>
    )
}