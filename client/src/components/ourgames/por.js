
import React from 'react';

export default function PorGame() {

    return (
        <>
            <section class="hero hero-full">
                <div class="hero-bg">
                    <div class="hero-items"><img src="../images/por/por_1.avif" alt="POR" width="1920" height="480" /></div>
                </div>
            </section>
            <section className="about-section" style={{ padding: '30px' }}>
                <div className="auto-container">
                    <div className="lower-content">
                        <div className="row clearfix">

                            <div className="column col-lg-12 col-md-12 col-sm-12">
                                <p className="about-content">POR (Players on Retaliation) is a new Shooting Battle Royale with nonstop action pack, thrill & revenge with a strong storyline based Shooter!</p>

                                <p className="about-content">It is an upcoming Best action Shooter game with easy controls, realistic graphics, interesting weapons & attractive characters with a huge collection of customization to steal your screen!</p>
                            </div>

                            <div className='col-12 centered'>
                                <iframe title='trailer' src="https://www.youtube.com/embed/WwFLWQ6dPbo" style={{ height: '500px', width: '100%', border: 'none' }} allowfullscreen='true'>
                                </iframe>
                            </div>

                            <div className="column col-lg-12 col-md-12 col-sm-12">
                                <br />
                                <p className="about-content">It has everything a shooter needs : FPS and TPS options & much more...</p>
                                <p className="about-content">Online Shooter PvP : Compete and fight against other players or friends around the world to face the thrill of Retaliation.</p>
                                <p className="about-content">On top, are you dare to handle POR's Zombies?</p>
                                <p className="about-content">Coming soon...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hero hero-full">
                <div class="hero-bg">
                    <div class="hero-items"><img src="../images/por/por_2.avif" alt="POR" width="1920" height="480" /></div>
                </div>
            </section>
        </>
    )
}