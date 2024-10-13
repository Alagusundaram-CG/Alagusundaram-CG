// src/components/EmailVerification.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import DataFetcher from '../components/fetch';
import { useParams } from 'react-router-dom';

const EmailVerification = () => {
    const { id } = useParams(); // Extract ID from URL
    const [verificationStatus, setVerificationStatus] = useState(null);
    //   const history = useHistory();
    useEffect(() => {
        const verifyAccount = async () => {
            try {
                DataFetcher('verify_email', { id }).then((response) => {
                    if (response) {
                        setVerificationStatus(response.message);
                    }
                });
            } catch (error) {
                setVerificationStatus('Verification failed. Please try again.');
            }
        };

        if (id) {
            verifyAccount();
        }
    }, [id]);

    return (
        <>

            <section className="matches-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <img src='../../images/check.png' alt='' width={60} />
                        <br /><br /><br />
                        <h2>{verificationStatus}</h2>
                        <br />
                        <div className="title">Please Login your account</div>
                        <br />
                        <button style={{ padding: '5px 10px 5px 10px', color: '#fff', backgroundColor: '#ff7d00', borderRadius: '50px', transition: 'none', animation: 'none', fontSize: '16px', fontWeight: 'bolder' }}>LOGIN / SIGNUP</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmailVerification;
