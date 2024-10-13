/* global $ */
import React, { useEffect, useState } from 'react';
import HomeBannerData from '../data/esports.json';
import DataFetcher from '../components/fetch';
import { Link } from 'react-router-dom';

function GameCard(params) {
    // const [isHovered, setIsHovered] = useState(false);
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }
    return (
        <>
            <div class="testimonial-block">
                <div class="news-block col-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="inner-box hvr-bob">
                        <div class="image">
                            <a href="blog-single.html"><img src={params.imgUrl} alt={params.alt} style={{ width: "100%" }} /></a>
                        </div>
                        <div class="lower-content">
                            {/* <div class="post-date">20 may 2019</div> */}
                            <h2><a href="blog-single.html">{params.alt}</a></h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={params.cardSize} style={{ padding: '0px 0px 10px 10px' }}>
                <div className="thumbnail" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Link to={`/games/${params.game_id}`}>
                        <img src={params.imgUrl} alt={params.alt} style={{ width: "100%" }} />
                        {isHovered && <div className="video-container">
                            <video className="video" src={params.vidUrl} autoPlay muted loop />
                            <div className="text">{params.alt}</div>
                        </div>
                        }
                    </Link>
                </div>
            </div> */}
        </>
    )
}
const ESportsLandingScreen = () => {
    const [GameData, setGameData] = useState([]);
    const [GameCardsData, setGameCardsData] = useState("");
    const [FeaturedGamesData, setFeaturedGamesData] = useState("");
    useEffect(() => {
        let isMounted = true;
        document.title = "Web Games - ChennaiGames";

        DataFetcher('get_webgames').then((apidata) => {
            if (isMounted) {
                setGameData(apidata);
            }
        });

        return () => {
            isMounted = false;
        };
        // Perform some side effect or data fetching
    }, []);

    useEffect(() => {
        console.log(GameData, 'fetch');
        if (GameData.length > 0) {
            //const storedGameIds = JSON.parse(localStorage.getItem('recentlyPlayedGames')) || [];
            //const recentlyPlayedList = storedGameIds.map(id => GameData.find(game => game.id === id));
            // const recentlyPlayedListData = recentlyPlayedList.map((key, index) => (
            //     <GameCards key={index} id={key.id} game_id={key.game_id} cardSize='col-lg-2 col-sm-3' imgUrl={'../' + key.thumbnail_image} vidUrl={'../' + key.thumbnail_video} alt={key.title} />
            // ));
            // setrecentlyPlayedListData(recentlyPlayedListData)
            const FeaturedGamesData = GameData.map((key, index) => {
                if (index <= 3) {
                    return (
                        <GameCard
                            key={index}
                            id={key.id}
                            game_id={key.game_id}
                            cardSize='col-lg-3 col-sm-6'
                            imgUrl={'../' + key.thumbnail_image}
                            vidUrl={'../' + key.thumbnail_video}
                            alt={key.title}
                        />
                    );
                } else {
                    return null;
                }
            });
            setFeaturedGamesData(FeaturedGamesData)
            const GameCardsData = GameData.map((key, index) => (
                <GameCard key={index} id={key.id} game_id={key.game_id} cardSize='col-lg-2 col-sm-3' imgUrl={'../' + key.thumbnail_image} vidUrl={'../' + key.thumbnail_video} alt={key.title} />
            ));
            setGameCardsData(GameCardsData)
        }
    }, [GameData]); // Logs GameData when it updates
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

        //Single Item Carousel
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                smartSpeed: 500,
                autoplay: 5000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 5
                    },
                    600: {
                        items: 5
                    },
                    800: {
                        items: 5
                    },
                    1024: {
                        items: 5
                    }
                }
            });
        }
    }, []);
    useEffect(() => {
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                loop: false,
                margin: 0,
                nav: true,
                // smartSpeed: 500,
                autoplay: 6000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1024: {
                        items: 1
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
        <>
            <section className="banner-section">
                <div className="banner-carousel owl-theme owl-carousel">
                    {HomeBannerData.map((image, index) => (
                        <div className="slide-item" key={index}>
                            <div className="image-layer" style={{ backgroundImage: `url(./images/esport_banners/${image})`, transition: "none", transform: "none" }}></div>
                            <div className="auto-container">
                                <div class="auto-container">
                                    <div class="">
                                        {/* <h3>the Premier <br /> Matches</h3>
                                        <div class="btn-box"><a href="#" class="theme-btn btn-style-one"><span class="btn-title">Learn more</span></a></div> */}
                                        <br /><br /><br /><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <br />
            <section class="facts-section">
                <div class="auto-container">
                    <br />
                    <div class="sec-title centered">
                        <div class="title">Top Competitive</div>
                        <h2> Games</h2>
                    </div>
                </div>
                <div className='row'>
                    {FeaturedGamesData}
                </div>
            </section>

            {/* contest details */}
            <section class="matches-section">
                <div class="auto-container">
                    <div class="sec-title centered">
                        {/* <div class="title"></div> */}
                        <h2>Tournaments</h2>
                    </div>

                    <div class="matches-info-tabs">

                        <div class="matches-tabs tabs-box">

                            <ul class="tab-btns tab-buttons clearfix">
                                <li data-tab="#prod-all" class="tab-btn active-btn"><span>All</span></li>
                                <li data-tab="#prod-matches" class="tab-btn"><span>Upcoming</span></li>
                                <li data-tab="#prod-results" class="tab-btn"><span>Completed</span></li>
                            </ul>


                            <div class="tabs-content">


                                <div class="tab active-tab" id="prod-all">
                                    <div class="content">


                                        <div class="matches-block">
                                            <div class="inner-block" style={{padding:'5px 50px'}}>
                                                <div class="row clearfix">


                                                    <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                        <div class="inner-column">

                                                            {/* <div class="title">Watch Stream</div> */}
                                                            <h2><a href="/games/mr-racer">Mahindra Gaming Showdown</a></h2>
                                                            <div class="date">A competitive online tournament featuring popular games like PUBG and Valorant, backed by Mahindra.</div>
                                                            <br />
                                                            <ul class="tags">
                                                                <li>26 participants</li>
                                                                <li>Upcoming Matches</li>
                                                            </ul>

                                                        </div>
                                                    </div>


                                                    <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                        <div class="inner-column">
                                                            <div class="row clearfix">


                                                                <div class="col-lg-12 col-md-6 col-sm-12">
                                                                    <div class="inner-item">
                                                                        <img src='../../images/contest_banners/thar.png' alt='' style={{borderRadius: '50px 0px 50px 0px'}}/>
                                                                    </div>
                                                                </div>


                                                                {/* <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                    <div class="inner-item">
                                                                        <div class="icon-box">
                                                                            <span class="icon flaticon-wolf"></span>
                                                                        </div>
                                                                        <a href="#" class="product">Wolf Smart</a>
                                                                    </div>
                                                                </div> */}

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="matches-block">
                                            <div class="inner-block" style={{padding:'5px 50px'}}>
                                                <div class="row clearfix">


                                                    <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                        <div class="inner-column">

                                                            {/* <div class="title">Watch Stream</div> */}
                                                            <h2><a href="matches-single.html">Hero Moto Battle Championship</a></h2>
                                                            <div class="date">An action-packed battle royale competition, sponsored by Hero MotoCorp, with top teams competing for glory.</div>
                                                            <br />
                                                            <ul class="tags">
                                                                <li>1000 participants</li>
                                                                <li>2Laks CG Reward</li>
                                                            </ul>

                                                        </div>
                                                    </div>


                                                    <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                        <div class="inner-column">
                                                            <div class="row clearfix">


                                                            <div class="col-lg-12 col-md-6 col-sm-12">
                                                                    <div class="inner-item">
                                                                        <img src='../../images/contest_banners/xpulse.png' alt='' style={{borderRadius: '50px 0px 50px 0px'}}/>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="matches-block">
                                            <div class="inner-block" style={{padding:'5px 50px'}}>
                                                <div class="row clearfix">


                                                    <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                        <div class="inner-column">

                                                            {/* <div class="title">Watch Stream</div> */}
                                                            <h2><a href="matches-single.html">ROG Ultimate Gaming Championship</a></h2>
                                                            <div class="date">A premier esports competition featuring top-tier gaming action and cutting-edge technology, sponsored by ROG (Republic of Gamers).</div>
                                                            <br />
                                                            <ul class="tags">
                                                                <li>26 participants</li>
                                                                <li>Upcoming Matches</li>
                                                            </ul>

                                                        </div>
                                                    </div>


                                                    <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                        <div class="inner-column">
                                                            <div class="row clearfix">


                                                            <div class="col-lg-12 col-md-6 col-sm-12">
                                                                    <div class="inner-item">
                                                                        <img src='../../images/contest_banners/rog.png' alt='' style={{borderRadius: '50px 0px 50px 0px'}}/>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="matches-block">
                                            <div class="inner-block" style={{padding:'5px 50px'}}>
                                                <div class="row clearfix">


                                                    <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                        <div class="inner-column">

                                                            {/* <div class="title">Watch Stream</div> */}
                                                            <h2><a href="matches-single.html">Nestle Power Play Tournament</a></h2>
                                                            <div class="date">A gaming contest focused on strategy and team-based games, with Nestlé providing exciting prizes and sponsorship.</div>
                                                            <br />
                                                            <ul class="tags">
                                                                <li>26 participants</li>
                                                                <li>Upcoming Matches</li>
                                                            </ul>

                                                        </div>
                                                    </div>


                                                    <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                        <div class="inner-column">
                                                            <div class="row clearfix">
                                                            <div class="col-lg-12 col-md-6 col-sm-12">
                                                                    <div class="inner-item">
                                                                        <img src='../../images/contest_banners/nestle.png' alt='' style={{borderRadius: '50px 0px 50px 0px'}}/>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="tab" id="prod-matches">
                                        <div class="content">


                                            <div class="matches-block">
                                                <div class="inner-block">
                                                    <div class="row clearfix">


                                                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <ul class="tags">
                                                                    <li>26 participants</li>
                                                                    <li>Upcoming Matches</li>
                                                                </ul>
                                                                <div class="title">Recent Results  <span>.  40 : 32</span></div>
                                                                <h2><a href="matches-single.html">BACON TENDERLOIN DRUMSTICK MEATBALL</a></h2>
                                                                <div class="date">17th APRIL 2019, 11:00 PM</div>
                                                            </div>
                                                        </div>


                                                        <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <div class="row clearfix">


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="i con flaticon-bull"></span>
                                                                            </div>
                                                                            <a href="#" class="product">bull eye</a>
                                                                        </div>
                                                                    </div>


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-playground"></span>
                                                                            </div>
                                                                            <a href="#" class="product">bull eye</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div class="matches-block">
                                                <div class="inner-block">
                                                    <div class="row clearfix">


                                                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <ul class="tags">
                                                                    <li>26 participants</li>
                                                                    <li>Upcoming Matches</li>
                                                                </ul>
                                                                <div class="title">Recent Results</div>
                                                                <h2><a href="matches-single.html">resident evil final chapter battle</a></h2>
                                                                <div class="date">12th MAY 2019, 11:00 PM</div>
                                                            </div>
                                                        </div>


                                                        <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <div class="row clearfix">


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-skull"></span>
                                                                            </div>
                                                                            <a href="#" class="product">skeleton</a>
                                                                        </div>
                                                                    </div>


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-bear"></span>
                                                                            </div>
                                                                            <a href="#" class="product">bearmen</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div class="matches-block">
                                                <div class="inner-block">
                                                    <div class="row clearfix">


                                                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <ul class="tags">
                                                                    <li>26 participants</li>
                                                                    <li>Upcoming Matches</li>
                                                                </ul>
                                                                <div class="title">Recent Results  <span>.  40 : 32</span></div>
                                                                <h2><a href="matches-single.html">justice league Matches of power</a></h2>
                                                                <div class="date">18th MAY 2019, 11:00 PM</div>
                                                            </div>
                                                        </div>


                                                        <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <div class="row clearfix">


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-portrait"></span>
                                                                            </div>
                                                                            <a href="#" class="product">Cute cat</a>
                                                                        </div>
                                                                    </div>


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-bird"></span>
                                                                            </div>
                                                                            <a href="#" class="product">black crow</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="tab" id="prod-results">
                                        <div class="content">


                                            <div class="matches-block">
                                                <div class="inner-block">
                                                    <div class="row clearfix">


                                                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <ul class="tags">
                                                                    <li>26 participants</li>
                                                                    <li>Upcoming Matches</li>
                                                                </ul>
                                                                <div class="title">Recent Results</div>
                                                                <h2><a href="matches-single.html">resident evil final chapter battle</a></h2>
                                                                <div class="date">12th MAY 2019, 11:00 PM</div>
                                                            </div>
                                                        </div>


                                                        <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <div class="row clearfix">


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-skull"></span>
                                                                            </div>
                                                                            <a href="#" class="product">skeleton</a>
                                                                        </div>
                                                                    </div>


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-bear"></span>
                                                                            </div>
                                                                            <a href="#" class="product">bearmen</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div class="matches-block">
                                                <div class="inner-block">
                                                    <div class="row clearfix">


                                                        <div class="content-column col-lg-7 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <ul class="tags">
                                                                    <li>26 participants</li>
                                                                    <li>Upcoming Matches</li>
                                                                </ul>
                                                                <div class="title">Recent Results  <span>.  40 : 32</span></div>
                                                                <h2><a href="matches-single.html">justice league Matches of power</a></h2>
                                                                <div class="date">18th MAY 2019, 11:00 PM</div>
                                                            </div>
                                                        </div>


                                                        <div class="match-column col-lg-5 col-md-12 col-sm-12">
                                                            <div class="inner-column">
                                                                <div class="row clearfix">


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-portrait"></span>
                                                                            </div>
                                                                            <a href="#" class="product">Cute cat</a>
                                                                        </div>
                                                                    </div>


                                                                    <div class="match-item col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="inner-item">
                                                                            <div class="icon-box">
                                                                                <span class="icon flaticon-bird"></span>
                                                                            </div>
                                                                            <a href="#" class="product">black crow</a>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ESportsLandingScreen