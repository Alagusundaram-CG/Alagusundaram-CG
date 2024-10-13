/* global $ */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SignInComponent from './sign_in_component';
import LoginSignupForm from './login_register_form';
import DataFetcher from '../components/fetch';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const EsportsHeader = () => {
    function openNav() {
        toggleFormMode()
        document.getElementById("mySidenav").style.width = "350px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    function logout() {
        localStorage.clear();
        window.location.reload();
        // document.getElementById('profile_coins').style.display = 'none';
        // document.getElementById('login_btn').style.display = 'block';
    }
    function toggleFormMode() {
        let isLoginMode = true//!isLoginMode;
        // alert(isLoginMode)
        document.getElementById('nav_header').textContent = isLoginMode ? 'Log in' : 'Sign up';
        document.getElementById('toggleButton').style.display = 'block';
        document.getElementById('toggleMessage').style.display = 'block';
        document.getElementById('thirdparty_signin').style.display = 'block';
        document.getElementById('toggleButton').textContent = isLoginMode ? 'Sign Up' : 'Login';
        document.getElementById('toggleMessage').textContent = isLoginMode ? 'New to Chennaigames?' : 'Already have an account?';
        // Toggle the visibility of signup fields
        const signupFields = document.getElementById('signupFields');
        signupFields.style.display = isLoginMode ? 'none' : 'block';
        document.getElementById("submit").value = isLoginMode ? "login_user" : "sign_up"
        // Toggle the username field visibility
        document.getElementById('usernameField').style.display = isLoginMode ? 'none' : 'block';
        document.getElementById('login_password').style.display = isLoginMode ? 'block' : 'none';
        resetFormFields();
        if (isLoginMode) {
            const submitButton = document.getElementById('submit');
            submitButton.disabled = false;
        }
    }
    function resetFormFields() {
        const inputs = document.querySelectorAll('#authForm input');
        inputs.forEach(input => input.value = '');
        document.getElementById('location').selectedIndex = 0; // Reset dropdown
        document.getElementById('gender').selectedIndex = 0; // Reset dropdown
    }
    const isMounted = useRef(true);
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
    useEffect(() => {
        isMounted.current = true;
        DataFetcher('get_profile_details').then((apidata) => {
            // if (isMounted) {
                // alert(JSON.stringify(apidata))
                if (apidata) {
                    if (apidata.status === 'S') {
                        // console.log(apidata);
                        localStorage.setItem('coins', apidata.coins);
                        localStorage.setItem('tickets', apidata.tickets);
                        document.getElementById('coins').textContent = localStorage.getItem('coins');
                        document.getElementById('tickets').textContent = localStorage.getItem('tickets');
                    }
                }
                // setGameData(apidata);
            // }
        });
        let coins = localStorage.getItem('coins');
        let tickets = localStorage.getItem('tickets');
        // alert(coins + tickets)
        if (coins && tickets) {
            document.getElementById('coins').textContent = localStorage.getItem('coins');
            document.getElementById('tickets').textContent = localStorage.getItem('tickets');
        }
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
    useEffect(() => {
        let user_name = localStorage.getItem('name');
        // let user_id = localStorage.getItem('user_id');
        if (user_name) {

            document.getElementById('profile_coins').style.display = 'block';
            document.getElementById('profile_tickets').style.display = 'block';
            document.getElementById('profile_pic_name').style.display = 'block';
            document.getElementById('login_btn').style.display = 'none';
            document.getElementById('user_name').innerText = user_name;
            document.getElementById('profile_pic').src = '../../images/alphabets/' + user_name.charAt(0).toLowerCase() + '.png';

        } else {
            document.getElementById('profile_coins').style.display = 'none';
            document.getElementById('profile_tickets').style.display = 'none';
            document.getElementById('profile_pic_name').style.display = 'none';
            document.getElementById('login_btn').style.display = 'block';

        }
    }, []);
    return (

        <header class="main-header header-style-two">

            <div class="header-top">
                <div class="auto-container clearfix">

                    {/* <div class="top-left clearfix">
                    <ul class="info-list">
                        <li>Welcome to CG ESports</li>
                    </ul>
                </div> */}

                    <div class="top-right">
                        <ul class="social-icons">
                            <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                            <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="header-lower">
                <div class="auto-container">
                    <div class="clearfix">

                        <div class="logo-outer">
                            <div class="logo"><a href="index.html"><img src="../../images/logo.png" alt="" title="" /></a></div>
                        </div>


                        <div class="nav-outer clearfix">

                            <div class="mobile-nav-toggler"><span class="icon flaticon-menu-1"></span></div>

                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li><Link to="/home" onClick={() => { handlePreloader() }}>Visit Studio</Link></li>
                                        <li class="nav-item" id='profile_coins'>
                                            <a class="nav-link" href="#">
                                                <div class="balance-box">
                                                    <img src="../../images/coin.png" alt="Coins" class="coin-icon" />
                                                    <div class="balance-info">
                                                        <span class="balance-text" id='coins'>0</span>
                                                        {/* <span class="balance-label">Coins</span> */}
                                                    </div>
                                                    <button class="btn btn-outline-light btn-sm plus-btn">+</button>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item" id='profile_tickets'>
                                            <a class="nav-link" href="#">
                                                <div class="balance-box">
                                                    <img src="../../images/ticket.png" alt="Tickets" class="ticket-icon" />
                                                    <div class="balance-info">
                                                        <span class="balance-text" id='tickets'>0</span>
                                                        {/* <span class="balance-label">Tickets</span> */}
                                                    </div>
                                                    <button class="btn btn-outline-light btn-sm plus-btn">+</button>
                                                </div>
                                            </a>
                                        </li>
                                        {/* <li class="nav-item">
                                          <a class="nav-link" href="#">
                                              <div class="balance-box">
                                                  <img src="../../images/ticket.png" alt="Tickets" class="ticket-icon" />
                                                  <span class="balance-text">10</span>
                                          
                                              </div>
                                          </a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link" href="#">
                                              <div class="balance-box">
                                                  <img src="../../images/coin.png" alt="Coins" class="coin-icon" />
                                                  <span class="balance-text">1500</span>
                                               
                                              </div>
                                          </a>
                                      </li> */}

                                        <li class="dropdown" id='profile_pic_name'><a href=""><img id='profile_pic' src='../images/profile.jpg' style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ccc' }} alt='' />&nbsp;&nbsp;<span id='user_name'></span> </a>
                                            <ul>
                                                <li><a href="">Account</a></li>
                                                <li><a onClick={() => { logout() }}>Log Out</a></li>
                                            </ul>
                                        </li>

                                        <li id='login_btn'>
                                            <button onClick={() => openNav()} style={{ padding: '5px 10px 5px 10px', color: '#fff', backgroundColor: '#ff7d00', borderRadius: '50px', transition: 'none', animation: 'none', fontSize: '16px', fontWeight: 'bolder' }}>LOGIN / SIGNUP</button>
                                        </li>

                                        <div id="mySidenav" className="sidenav">
                                            <a href="javascript:void(0)" id='close_x_btn' className="closebtn" onClick={() => closeNav()}>&times;</a>
                                            <div className='row'>
                                                <div className='col-5'></div>
                                                <h4 style={{ alignItems: 'center' }} id='nav_header'>Log in</h4>
                                            </div>

                                            <br />
                                            <div className='row'>
                                                <div className='col-1'></div>
                                                <div className="form-group col-10">
                                                    <SignInComponent />
                                                    <hr></hr>
                                                </div>

                                            </div>
                                            <LoginSignupForm></LoginSignupForm>
                                        </div>
                                        {/* </li> */}
                                        {/* <li><a href="contact.html">Contacts</a></li> */}
                                    </ul>
                                </div>
                            </nav>


                        </div>
                    </div>
                </div>
            </div>

            <div class="sticky-header">
                <div class="auto-container clearfix">

                    <div class="logo pull-left">
                        <a href="index.html" title=""><img src="images/logo.png" alt="" title="" /></a>
                    </div>

                    <div class="pull-right">
                        <nav class="main-menu clearfix">
                        </nav>
                    </div>
                </div>
            </div>

            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div class="close-btn"><span class="icon flaticon-close"></span></div>

                <nav class="menu-box">
                    <div class="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title="" /></a></div>
                    <div class="menu-outer">Here Menu Will Come Automatically Via Javascript / Same Menu as in Header</div>

                    <div class="social-links">
                        <ul class="clearfix">
                            <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                            <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                            <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default EsportsHeader;
