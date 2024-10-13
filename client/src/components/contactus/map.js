import React from 'react';

export default function MapSection() {
    return (
        <section className="map-section">
            <div className="auto-container">

                <div className="map-outer">

                    {/* <div id="map" style={{height: "400px"}}>
                    <iframe id="contactMap" frameborder="0"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.8879075991833!2d80.2299306!3d13.0290958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267072d93f0a1%3A0x5000f56f6b587686!2s1st%20Cross%20St%2C%20CIT%20Nagar%20West%2C%20CIT%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600035!5e0!3m2!1sen!2sin!4v1637998087743!5m2!1sen!2sin"
                        style={{width: "100%",height: "100%"}} allowFullScreen></iframe>
                </div> */}


                    <div className="map-content">
                        <div className="sec-title">
                            <h2>ChennaiGames Studio</h2>
                            <br />
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-12" style={{padding:'20px'}}>
                                    <div className="title">
                                        Operational Division:
                                    </div>
                                    <div className="">
                                        8th floor, Prestige Polygon, <br />
                                        No: 471, Anna Salai, Rathna Nagar,<br />
                                        Teynampet,<br />
                                        Chennai 600035.<br />
                                        Tamilnadu, India.
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12" style={{padding:'20px'}}>
                                    <div className="title">
                                        Headquarter:
                                    </div>
                                    <div className="">
                                        Thakur Building, No. 2, 2nd Floor, <br />
                                        1st Cross St, CIT Nagar West, <br />
                                        Chennai 600035,<br />
                                        Tamilnadu, India,<br />
                                        Phone: 044 42148213.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}