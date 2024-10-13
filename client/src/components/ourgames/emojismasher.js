
import React from 'react';

export default function EmojiSmasher() {

    return (
        <>

            <div className='col-12' style={{ backgroundImage: 'url(./images/emojismasher/bg.avif)', backgroundSize: '100%', backgroundRepeat: 'repeat' }}>

                <div>
                    <img src='./images/emojismasher/3.avif' alt='' style={{ position: 'absolute', top: '-60px', right: '0px', transform: 'rotate(-180deg)', maxWidth: '300px' }} />
                </div>
                <div className="sec-title centered" style={{ paddingTop: '50px' }}>
                    <img src='./images/emojismasher/logo.avif' alt='' style={{ maxWidth: '350px' }} />
                </div>
                <div className="sec-title centered">
                    {/* <img src='./images/emojismasher/group.avif' alt='' style={{ maxWidth: '400px' }} /> */}
                </div>

                <div className="sec-title centered">
                    <a href='https://play.google.com/store/apps/details?id=com.chennaigames.emojismasher' target='__blank'><img src='./images/playstore.avif' alt='' style={{ maxWidth: '200px' }} /></a>
                </div>
                <div>
                    <img src='./images/emojismasher/2.avif' alt='' style={{ position: 'absolute', float: 'right', right: '-140px', transform: 'rotate(-90deg)', maxWidth: '300px', marginTop: '250px' }} />
                </div>
                <div>
                    <img src='./images/emojismasher/1.avif' alt='' style={{ position: 'absolute', top: '250px', left: '-140px', transform: 'rotate(90deg)', maxWidth: '300px' }} />
                </div>

                <div>
                    <img src='./images/emojismasher/3.avif' alt='' style={{ position: 'absolute', bottom: '-60px', transform: 'rotate(0deg)', maxWidth: '300px', marginTop: '500px' }} />
                </div>

                {/* <div style={{backgroundImage: 'url(./images/mathking/stripe.avif)', backgroundSize: '50px', backgroundRepeat: 'repeat-x',height:'50px'}}></div> */}
                <section className="about-section" style={{ background: 'none', paddingTop: '20px' }}>
                    <div className="auto-container" >
                        <div className="lower-content">
                            <div className="row clearfix" style={{ fontFamily: '', color: '#fff' }}>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content" style={{ color: '#000' }}>Emoji Smasher is a Hyper Casual Clicker game to make you smile while playing!</p>

                                    <p className="about-content" style={{ color: '#000' }}>When you are in depression, almost Magically, nothing motivates you, but Smileys can!</p>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12 privacy-title">
                                    <h3 style={{ fontSize: '25px', color: '#000' }}>Game features</h3>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content" style={{ color: '#000' }}>
                                        <ul style={{ listStyle: 'unset', paddingLeft: '50px' }}>
                                            <li style={{ fontSize: '20px' }}>Tap on the Sad and Angry Smileys and make them happy.</li>
                                            <li style={{ fontSize: '20px' }}>Be careful of the Happy Smileys already they are happy, if you tap on them, they will pull you down.</li>
                                            <li style={{ fontSize: '20px' }}>One-tap easy-to-play with stunning visual effects and addictive game-play mechanics!</li>
                                            <li style={{ fontSize: '20px' }}>Smile & level up to have fun, only sky is the limit! 😀😍🥰🤣</li>
                                            <li style={{ fontSize: '20px' }}>Yes, unlimited challenging levels & different Emojis.</li>
                                            <li style={{ fontSize: '20px' }}>Cute sounds by Emojis will make you to fall in love!</li>
                                            <li style={{ fontSize: '20px' }}>Enjoy of Emoji Puzzle fun!</li>
                                            <li style={{ fontSize: '20px' }}>This Fluffy Smasher game is the new age of Facemoji Tap Titans.</li>
                                            <li style={{ fontSize: '20px' }}>It is inspired for Emoji Masher, Mashup and Stickers to express emotions!</li>
                                            <li style={{ fontSize: '20px' }}>Best Emoji Smasher game is dedicated to the true fans of Ant Smasher.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}