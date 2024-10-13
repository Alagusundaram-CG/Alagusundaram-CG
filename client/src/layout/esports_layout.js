/* global $ */
import React, { useEffect, useState } from 'react'
import EsportsHeader from '../components/esports_hearder';
import Footer from '../components/footer';
import Preloader from '../components/preloader';
import { Outlet, useLocation } from 'react-router-dom'
const EsportsLayout = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        // Simulate a loading delay
        const timeout = setTimeout(() => {
            $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300, () => {
                setLoading(false); // Set loading to false after fade out
            });
        }, 500); // Adjust the delay as needed

        return () => clearTimeout(timeout); // Cleanup on unmount
    }, [location]); // Re-run effect when location changes
    return (
        <>{loading && <Preloader />}
            <div className="page-wrapper">

                <EsportsHeader />
                <div className="page-content">

                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default EsportsLayout