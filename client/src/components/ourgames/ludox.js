
/* global $ */
import React, { useEffect} from 'react';

export default function LudoX() {
    useEffect(() => {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop:true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            margin:30,
            items:5,
            smartSpeed:450,
            autoplay:true,
            pagination:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsiveClass:true,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                800:{
                    items:5
                },
                1024:{
                    items:5
                }
            }
        })

        // owl.on('mousewheel', '.owl-stage', function (e) {
        //     if (e.deltaY>0) {
        //         owl.trigger('next.owl');
        //     } else {
        //         owl.trigger('prev.owl');
        //     }
        //     e.preventDefault();
        // });
    }, []);
    return (
        <div style={{ background: "rgb(0,34,77) linear-gradient(90deg, rgba(0,34,77,1) 0%, rgba(1 52 65) 50%, rgba(0,34,77,1) 100%)" }}>
            
                <div className="centered" style={{ paddingTop: '50px' }}>
                    <img src='./images/ludox/ludo_logo.png' alt='' style={{ maxWidth: '350px' }} />
                </div>
                <div className="sec-title centered">
                    {/* <img src='./images/emojismasher/group.avif' alt='' style={{ maxWidth: '400px' }} /> */}
                    {/* <h2>Coming Soon</h2> */}
                </div>
                <div>
                    <img src='./images/ludox/BG_1.png' alt='' style={{ position: 'absolute', float: 'right', right: '-5px', transform: 'rotateY(180deg)', maxWidth: '300px', bottom: '400px' }} className='ludo-side-bg'/>
                </div>
                <div>
                    <img src='./images/ludox/BG_1.png' alt='' style={{ position: 'absolute', float: 'right', left: '-5px', transform: 'rotateY(0deg)', maxWidth: '300px', bottom: '400px' }} className='ludo-side-bg'/>
                </div>
                <div>
                    <img src='./images/ludox/BG_2.png' alt='' style={{ position: 'absolute', top: '150px', left: '0px', transform: 'rotate(0deg)', maxWidth: '300px' }} className='ludo-side-bg'/>
                </div>
                <div>
                    <img src='./images/ludox/BG_2.png' alt='' style={{ position: 'absolute', top: '150px', right: '0px', transform: 'rotateY(180deg)', maxWidth: '300px' }} className='ludo-side-bg'/>
                </div>
                <div className="sec-title centered">
                    <a href='https://play.google.com/store/apps/details?id=com.chennaigames.ludox' target='__blank'><img src='./images/playstore.avif' alt='' style={{ maxWidth: '200px' }} /></a>
                </div>
                <div className='container-fluid'>
                    <hr style={{borderTop:"3px dotted #fff",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
                </div>
            <section className="about-section" style={{ background: 'none', paddingTop: '20px' }}>
                    <div className="auto-container" >
                        <div className="lower-content">
                            <div className="row clearfix" style={{ fontFamily: '', color: '#fff' }}>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content" style={{ color: '#fff' }}>LudoX is a modern twist on the classic Ludo board game, designed to provide an engaging and interactive experience for players of all ages. Whether you're playing with friends, family, or competing with players from around the globe, LudoX offers endless fun and excitement. Download LudoX today and enjoy the ultimate casual board game experience!</p>
                                </div>
                                
                                <div className="column col-lg-12 col-md-12 col-sm-12 privacy-title"><br/><br/>
                                    <h3 style={{ fontSize: '25px', color: '#fff' }}>Game features</h3>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content" style={{ color: '#fff' }}>
                                        <ul style={{ listStyle: 'unset', paddingLeft: '50px' }}>
                                            <li style={{ fontSize: '20px' }}><b>Flexible Group Size:</b> Perfect for any group size, LudoX accommodates 2, 3, or 4 players.</li>
                                            <li style={{ fontSize: '20px' }}><b>Multiplayer Mode:</b> Play online with players worldwide or enjoy local multiplayer with friends.</li>
                                            <li style={{ fontSize: '20px' }}><b>Single Player Mode:</b> Challenge yourself against AI opponents to sharpen your skills. </li>
                                            <li style={{ fontSize: '20px' }}><b>Local Player Mode:</b> Enjoy the game with friends and family in the same room. </li>
                                            <li style={{ fontSize: '20px' }}><b>Offline Mode:</b> Play with computer opponents or use local multiplayer (pass and play mode) without an internet connection. </li>
                                            <li style={{ fontSize: '20px' }}><b>Challenging AI Opponents:</b> Test your skills against multiple levels of AI opponents. </li>
                                            <li style={{ fontSize: '20px' }}><b>Lucky Dice:</b> Roll the dice and let your luck guide you to victory! </li>
                                        </ul>
                                    </p>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12 privacy-title">
                                <br/><br/>
                                    <h3 style={{ fontSize: '25px', color: '#fff' }}>Game Trailer:</h3>
                                </div>

                                <div className='col-12 centered'>
                                    <iframe width="866" height="487" src="https://www.youtube.com/embed/XsDgBwzsgjU" title="LudoX - Trailer | Online Fun Ludo Game. Play &amp; Enjoy with family &amp; friends!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true' style={{ height: '650px', width: '100%', border: 'none' }}></iframe>
                                </div>
                                
                                <div className="column col-lg-12 col-md-12 col-sm-12 privacy-title">
                                <br/><br/>
                                    <h3 style={{ fontSize: '25px', color: '#fff' }}>Simple Rules and Easy to Play:</h3>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content" style={{ color: '#fff' }}>
                                        <ul style={{ listStyle: 'unset', paddingLeft: '50px' }}>
                                            <li style={{ fontSize: '20px' }}>Roll a six to move a token from the base to the starting square.</li>
                                            <li style={{ fontSize: '20px' }}>Roll again if you get a six. </li>
                                            <li style={{ fontSize: '20px' }}>Move a token according to the number rolled on the die.</li>
                                            <li style={{ fontSize: '20px' }}>Land on an opponent's token to send it back to their base.</li>
                                            <li style={{ fontSize: '20px' }}>Tokens in safe zones cannot be captured.</li>
                                            <li style={{ fontSize: '20px' }}>Move tokens around the board and into the home column.</li>
                                            <li style={{ fontSize: '20px' }}>Land exactly on the final square by an exact roll.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <div className='container-fluid' >
                <div className="sec-title centered">
                    {/* <div className="title">Game</div> */}
                    <h2><span><img src='./images/ludox/coins/Green_Coin.png' alt='LudoX coin' width={40}/></span>&nbsp;Features&nbsp;<span><img src='./images/ludox/coins/Red_Coin.png' alt='LudoX coin' width={38}/></span></h2>
                </div>

                <div class="owl-carousel">
                    <div> <img src='./images/ludox/screenshots/1.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/2.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/3.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/4.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/5.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/6.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/7.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/8.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/9.avif' alt=''/></div>
                    <div> <img src='./images/ludox/screenshots/10.avif' alt=''/></div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

