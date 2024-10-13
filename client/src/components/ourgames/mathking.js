
import React from 'react';

export default function MathKing() {

    return (
        <>
            <div className='col-12' style={{ backgroundImage: 'url(./images/mathking/board.avif)', backgroundSize: '100%', backgroundRepeat: 'repeat' }}>
                <div className='col-12' style={{ backgroundImage: 'url(./images/mathking/ribbon.avif)', backgroundSize: '25%', backgroundRepeat: 'repeat-x', }}>

                    <div className="sec-title centered" style={{ paddingTop: '150px' }}>
                        <img src='./images/mathking/title.avif' alt='' style={{ maxWidth: '350px' }} />
                    </div>
                    <div className="sec-title container">
                        <div className='row'>
                            <div className='col-6 col-lg-3 col-md-3 col-sm-3'>
                                <img src='./images/mathking/addition.avif' alt='' style={{ maxWidth: '150px' }} />
                            </div>
                            <div className='col-6 col-lg-3 col-md-3 col-sm-3'>
                                <img src='./images/mathking/division.avif' alt='' style={{ maxWidth: '150px' }} />
                            </div>
                            <div className='col-6 col-lg-3 col-md-3 col-sm-3'>
                                <img src='./images/mathking/multiplication.avif' alt='' style={{ maxWidth: '150px' }} />
                            </div>
                            <div className='col-6 col-lg-3 col-md-3 col-sm-3'>
                                <img src='./images/mathking/subtraction.avif' alt='' style={{ maxWidth: '150px' }} />
                            </div>
                        </div>
                        
                        {/* <img src='./images/mathking/division.avif' alt='' style={{ maxWidth: '200px' }} />
                        <img src='./images/mathking/multiplication.avif' alt='' style={{ maxWidth: '200px' }} />
                        <img src='./images/mathking/subtraction.avif' alt='' style={{ maxWidth: '200px' }} /> */}
                    </div>

                    <div className="sec-title centered">
                        <a href='https://play.google.com/store/apps/details?id=com.chennaigames.mathking' target='__blank'><img src='./images/playstore.avif' alt='' style={{ maxWidth: '200px' }} /></a>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(./images/mathking/stripe.avif)', backgroundSize: '50px', backgroundRepeat: 'repeat-x',height:'50px'}}></div>
                <section className="about-section" style={{background:'none', paddingTop:'20px'}}>
                    <div className="auto-container" >
                        <div className="lower-content">
                            <div className="row clearfix" style={{fontFamily:'KalamReg', color:'#fff'}}>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content">MATH KING is the perfect game to help your kids to improve their Math skills in easy & fun way!</p>

                                    <p className="about-content">MATH KING game even help you to develop calculation speed with high accuracy!</p>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12 privacy-title">
                                    <h3 style={{ fontSize: '25px' }}>Game features</h3>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content">
                                        <ul style={{ listStyle: 'unset', paddingLeft: '50px' }}>
                                            <li style={{ fontSize: '20px' }}>Hand drawn cute animals by kids</li>
                                            <li style={{ fontSize: '20px' }}>Level based Practice modes for Addition, Subtraction, Multiplication & Division</li>
                                            <li style={{ fontSize: '20px' }}>Mixed operations - play mode to beat their own best score!</li>
                                            <li style={{ fontSize: '20px' }}>Playful learning of Multiplication Tables, develop memory power & training their brain to quickly find the answer with accuracy!</li>
                                            <li style={{ fontSize: '20px' }}>No advertisement, No disturbance & No Sign-in etc.</li>
                                            <li style={{ fontSize: '20px' }}>All features are fully FREE, so no need to pay anything.</li>
                                            <li style={{ fontSize: '20px' }}>And most importantly, it is created for our kids & by the kids (most of the artworks)!</li>
                                        </ul>
                                    </p>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <h3 style={{ fontSize: '25px' }}>Practice mode</h3>
                                </div>

                                <div className="column col-lg-12 col-md-12 col-sm-12">
                                    <p className="about-content">
                                        <ul style={{ listStyle: 'unset', paddingLeft: '50px' }}>
                                            <li style={{ fontSize: '20px' }}>Addition game : 1 or 2 digit addition, sequential addition.</li>
                                            <li style={{ fontSize: '20px' }}>Subtraction game : 1 or 2 digit subtraction to practice on how to subtract.</li>
                                            <li style={{ fontSize: '20px' }}>Multiplication game : To learn multiplication tables and multiplying methods to improve recalling ability</li>
                                            <li style={{ fontSize: '20px' }}>Division game : Learn to divide 1, 2 or 3 digit numbers</li>
                                            <li style={{ fontSize: '20px' }}>Basic to Advanced level for each Math operations</li>
                                            <li style={{ fontSize: '20px' }}>Develop your calculation speed with accuracy!</li>
                                            <li style={{ fontSize: '20px' }}>Fun theme with cute animals, candy etc., to surprise kids while learning</li>
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