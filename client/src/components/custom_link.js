
/* global $ */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Preloader from './preloader';
const CustomLink = ({ to, children, ...props }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        // function handlePreloader() {
        $('body').removeClass('page-loaded');
        $('.preloader').css('display', 'block')
        if ($('.preloader').length) {
            // $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300);
        }
        // }
        // setTimeout(() => {
        navigate(to);
        setLoading(false);
        // }, 1000); // Adjust the timeout duration as needed
    };

    return (
        <>
            <Preloader />
            <Link to={to} {...props} onClick={handleClick}>
                {children}
            </Link>
        </>
    );
};

export default CustomLink;
