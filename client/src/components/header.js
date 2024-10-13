/* global $ */
import React, { useEffect, useRef, useState } from 'react';
import Social from './social';
import { Link } from 'react-router-dom'
import Popup from './pop_up';
// import DataFetcher from '../components/fetch';
// import SignInComponent from './sign_in_component';

// import CustomLink from './custom_link';

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    if (modalIsOpen) {
        console.log('m-open');
        // document.body.style.overflow = 'hidden';
    } else {
        console.log('m-close');
        // document.body.style.overflow = 'visible';
    }
    const isMounted = useRef(true);
    function handleOrientationChange() {
        const orientation = window.orientation;
        if (orientation === 0 || orientation === 180) {
            //alert('Portrait mode');
            // $('#mCSB_scrollbar_vertical').css('display','none');
            $("#mCSB_1").css('max-height', '800px');
        } else if (orientation === 90 || orientation === -90) {
            //alert('Landscape mode');
            // $('#mCSB_scrollbar_vertical').css('display','none');
            $("#mCSB_1").css('max-height', '800px');
        }
    }

    window.addEventListener('resize', handleOrientationChange);
    function handlePreloader() {
        // alert('0')
        $('body').removeClass('page-loaded');
        $('.preloader').css('display', 'block')
        if ($('.preloader').length) {
            // alert(1)
            // $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300);
        }
    }
    /* Set the width of the side navigation to 250px */
    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "350px";
    // }

    // /* Set the width of the side navigation to 0 */
    // function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    // }
    // function logout() {
    //     localStorage.clear();
    //     document.getElementById("logout").style.display = "none";
    //     document.getElementById('open').style.display = 'block';
    // }
    // let isLoginMode = true;

    // function toggleFormMode() {
    //     isLoginMode = !isLoginMode;
    //     document.getElementById('nav_header').textContent = isLoginMode ? 'Log in' : 'Sign up';
    //     document.getElementById('toggleButton').textContent = isLoginMode ? 'Sign Up' : 'Login';
    //     document.getElementById('toggleMessage').textContent = isLoginMode ? 'New to Chennaigames?' : 'Already have an account?';

    //     // Toggle the visibility of signup fields
    //     const signupFields = document.getElementById('signupFields');
    //     signupFields.style.display = isLoginMode ? 'none' : 'block';
    //     document.getElementById("submit").value = isLoginMode ? "login_user" : "sign_up"
    //     // Toggle the username field visibility
    //     document.getElementById('usernameField').style.display = isLoginMode ? 'none' : 'block';
    //     document.getElementById('login_password').style.display = isLoginMode ? 'block' : 'none';
    //     resetFormFields();
    //     if (isLoginMode) {
    //         const submitButton = document.getElementById('submit');
    //         submitButton.disabled = false;
    //     }
    // }

    // function validatePassword() {

    //     const password = document.getElementById('password').value;
    //     const submitButton = document.getElementById('submit');
    //     const passwordHelp = document.getElementById('passwordHelp');

    //     // Regular expression to check the password strength
    //     const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //     if (strongPasswordPattern.test(password)) {
    //         passwordHelp.style.color = 'green';
    //         passwordHelp.textContent = 'Strong password!';
    //         submitButton.disabled = false;
    //         // alert(1)
    //     } else {
    //         passwordHelp.style.color = 'red';
    //         passwordHelp.textContent = 'Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.';
    //         submitButton.disabled = true;
    //     }
    // }
    // function resetFormFields() {
    //     const inputs = document.querySelectorAll('#authForm input');
    //     inputs.forEach(input => input.value = '');
    //     document.getElementById('location').selectedIndex = 0; // Reset dropdown
    //     document.getElementById('gender').selectedIndex = 0; // Reset dropdown
    // }

    // function sumbitapi() {
    //     let api_name = document.getElementById("submit").value
    //     let mail = $("#email").val();
    //     let password = $("#lpassword").val();

    //     // alert(mail + password + api_name)
    //     console.log(mail, password);
    //     let registerdata = {
    //         email_id: mail,
    //         password: password
    //     }
    //     let condition = false;

    //     if (api_name === 'login_user') {
    //         if (mail && password) {
    //             condition = true;
    //         }
    //     }
    //     if (api_name === 'sign_up') {
    //         let password = $("#password").val();
    //         let name = $("#username").val();
    //         let dob = $("#dob").val();
    //         let gender = $("#gender").val();
    //         let location = $("#location").val();
    //         console.log(password + name + dob + gender + location);
    //         if (name && mail && password && dob && gender && location) {
    //             registerdata = {
    //                 email_id: mail,
    //                 password: password,
    //                 user_name: name,
    //                 dob: dob,
    //                 gender: gender,
    //                 location: location
    //             }
    //             condition = true;
    //         }
    //     }
    //     // alert(condition)
    //     if (condition) {
    //         DataFetcher(api_name, registerdata).then((apidata) => {
    //             console.log(apidata);
    //             if (apidata.response_code == 1) {
    //                 if (api_name === 'sign_up') {
    //                     alert('Successfully Registered');
    //                 } else if (api_name === 'login_user') {
    //                     alert('Login Successfull');
    //                 }
    //                 document.getElementById('officialname').textContent = apidata.uname;
    //                 document.getElementById('open').style.display = 'none';
    //                 document.getElementById('logout').style.display = 'block';
    //                 localStorage.setItem("name", apidata.uname);
    //                 localStorage.setItem("user_id", apidata.user_id);
    //                 closeNav();
    //             } else if (apidata.response_code == 2) {
    //                 alert(apidata.msg);
    //             }
    //         });
    //     }
    // }


    useEffect(() => {
        // let user_name = localStorage.getItem('name');
        // let user_id = localStorage.getItem('user_id');
        // if (user_name) {
        //     document.getElementById('officialname').innerHTML = `<h5>${user_name.toUpperCase()}</h5>`;
        //     document.getElementById('open').style.display = 'none';
        //     document.getElementById('logout').style.display = 'block';
        // }

        isMounted.current = true;

        const handleScroll = () => {
            if (isMounted.current) {
                const windowpos = window.scrollY;
                const siteHeader = document.querySelector('.main-header');
                const scrollLink = document.querySelector('.scroll-to-top');
                const stickyHeader = document.querySelector('.main-header .sticky-header');

                if (siteHeader) {
                    if (windowpos > 100) {
                        siteHeader.classList.add('fixed-header');
                        stickyHeader.classList.add('animated', 'slideInDown');
                        scrollLink.style.display = 'block';
                    } else {
                        siteHeader.classList.remove('fixed-header');
                        stickyHeader.classList.remove('animated', 'slideInDown');
                        scrollLink.style.display = 'none';
                    }
                }
            }
        };

        const initMobileMenu = () => {
            if (document.querySelector('.mobile-menu')) {
                $('.mobile-menu .menu-box').mCustomScrollbar();

                const mobileMenuContent = document.querySelector('.main-header .nav-outer .main-menu').innerHTML;
                document.querySelector('.mobile-menu .menu-box .menu-outer').innerHTML = mobileMenuContent;
                document.querySelector('.sticky-header .main-menu').innerHTML = mobileMenuContent;

                document.querySelectorAll('.mobile-menu li.dropdown .dropdown-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        btn.classList.toggle('open');
                        const ul = btn.previousElementSibling;
                        if (ul) {
                            if (ul.style.display === 'block') {
                                ul.style.display = 'none';
                            } else {
                                ul.style.display = 'block';
                            }
                        }
                    });
                });

                document.querySelector('.mobile-nav-toggler').addEventListener('click', () => {
                    document.body.classList.add('mobile-menu-visible');
                });

                document.querySelectorAll('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').forEach(el => {
                    el.addEventListener('click', () => {
                        document.body.classList.remove('mobile-menu-visible');
                    });
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        initMobileMenu();

        return () => {
            isMounted.current = false;
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    return (
        <header className="main-header">
            <div className="header-top">
                <div className="auto-container clearfix">
                    <div className="top-left clearfix">
                        <ul className="info-list">
                        </ul>
                    </div>


                    <Popup isOpen={modalIsOpen} GameInfo={'GameInfo'} onClose={() => setModalIsOpen(false)} />
                    <div className="top-right">
                        <ul className="social-icons">
                            <Social />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="preloader" id='preload'>
                <div className="icon"></div>
            </div>

            <div className="header-upper">
                <div className="inner-container">
                    <div className="auto-container clearfix">
                        <div className="logo-outer">
                            <div className="logo"><Link to="/home"><img src="../images/logo.avif" alt=""
                                title="Chennaigames Studio" /></Link></div>
                        </div>
                        <div className="nav-outer clearfix">
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu-1"></span></div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix pull-left">
                                        <li><Link to="/home" onClick={() => { handlePreloader() }}>Home</Link></li>
                                        <li><Link to="/about-us" onClick={() => { handlePreloader() }}>about us</Link></li>
                                        <li><Link to="/gallery" onClick={() => { handlePreloader() }}>Gallery</Link></li>
                                        <li><Link to="/ourgames" onClick={() => { handlePreloader() }}>Our Games</Link></li>
                                    </ul>

                                    <ul className="navigation pull-right clearfix">

                                        {/* <li><Link to="/blog">Blog</Link></li> */}
                                        <li><Link to="/careers" onClick={() => { handlePreloader() }}>Careers</Link></li>
                                        <li><Link to="/contact-us" onClick={() => { handlePreloader() }}>Contact Us</Link></li>
                                        <li><Link to="/games" onClick={() => { handlePreloader() }}><img src='../images/joystick.gif' alt='' style={{ width: '20px' }} />&nbsp;&nbsp;Web Games</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>



            <div className="sticky-header">
                <div className="auto-container clearfix">

                    <div className="logo pull-left">
                        <a href="/home" title=""><img src="images/logo.avif" alt="" title="" /></a>
                    </div>

                    <div className="pull-right">

                        <nav className="main-menu clearfix">

                        </nav>
                    </div>
                </div>
            </div>


            <div className="mobile-menu">
                <div className="menu-backdrop"></div>
                <div className="close-btn"><span className="icon flaticon-close"></span></div>

                <nav className="menu-box">
                    <div className="nav-logo"><a href="/"><img src="images/logo.avif" alt="" title="" /></a></div>
                    <div className="menu-outer">

                        <div className="social-links">
                            <ul className="clearfix">
                                <Social />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}