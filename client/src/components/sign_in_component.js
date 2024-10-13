import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import DataFetcher from './fetch';

const SignInComponent = () => {
    const [user, setUser] = useState(null);
    function resetFormFields() {
        const inputs = document.querySelectorAll('#authForm input');
        inputs.forEach(input => input.value = '');
        document.getElementById('location').selectedIndex = 0; // Reset dropdown
        document.getElementById('gender').selectedIndex = 0; // Reset dropdown
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    function openNav() {
        document.getElementById("mySidenav").style.width = "350px";
        document.getElementById('thirdparty_signin').style.display = 'none';
        document.getElementById('close_x_btn').style.display = 'none';
        document.getElementById('signup_email').style.display = 'none';
        document.getElementById('signup_password').style.display = 'none';
        document.getElementById('signup_confirm_password').style.display = 'none';

        let isLoginMode = false;
        document.getElementById('nav_header').textContent = isLoginMode ? 'Log in' : 'Sign up';
        document.getElementById('toggleButton').style.display = 'none';
        document.getElementById('toggleMessage').style.display = 'none';

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
    useEffect(() => {
        // Google Sign-In Initialization
        const initializeGoogleSignIn = () => {
            window.google.accounts.id.initialize({
                client_id: '720780434805-gpv7bbf2bf7psvrur28d81qheltlrjpq.apps.googleusercontent.com',
                callback: handleGoogleCredentialResponse,
                auto_select: false,
            });
            window.google.accounts.id.renderButton(
                document.getElementById('googleButtonDiv'),
                { theme: 'outline', size: 'large' }
            );
            window.google.accounts.id.prompt();

            // Check if user is already logged in via session storage
            const sessionUser = sessionStorage.getItem('user');
            if (sessionUser) {
                setUser(JSON.parse(sessionUser));
            }
        };

        const handleGoogleCredentialResponse = (response) => {
            let data = jwtDecode(response.credential);

            setUser(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            document.getElementById('user_name').innerText = data.name;
            document.getElementById('profile_pic').src = data.picture;
            document.getElementById('login_btn').style.display = 'none';
            localStorage.setItem('name', data.name);
            localStorage.setItem('img', data.picture);
            localStorage.setItem('email', data.email);
            localStorage.setItem('thirdPartySignin', true);
            DataFetcher('check_email', { email_id: data.email }).then((apidata) => {

                if (apidata) {
                    if (apidata.status === 'S' && apidata.response_code === 1) {
                        // console.log(apidata);
                        let registerdata = {
                            email_id: data.email,
                            password: 'google_signin'
                        }
                        DataFetcher('login_user', registerdata).then((apidata) => {
                            console.log(apidata);
                            if (apidata.response_code == 1) {
                                // if (api_name === 'login_user') {
                                alert('Login Successfull');
                                localStorage.setItem('token', apidata.token)
                                // }
                                document.getElementById('profile_coins').style.display = 'block';
                                document.getElementById('login_btn').style.display = 'none';
                                localStorage.setItem("name", apidata.uname);
                                localStorage.setItem("user_id", apidata.user_id);

                                closeNav();
                                resetFormFields();
                                window.location.reload();
                                // if (window.location.href.includes("/esports/verify-account/")) {
                                //     window.location.href = "/esports";
                                // }
                            } else if (apidata.response_code === 2) {
                                alert(apidata.msg);
                            }
                        });
                    } else {
                        // alert('hello')
                        openNav();
                    }
                }

            });

        };
        // setTimeout(() => {
        //     handleGoogleCredentialResponse()

        // }, 1000);
        // Initialize Google Sign-In on component mount
        const scriptGoogle = document.createElement('script');
        scriptGoogle.src = 'https://accounts.google.com/gsi/client';
        scriptGoogle.async = true;
        scriptGoogle.defer = true;
        scriptGoogle.onload = initializeGoogleSignIn;
        document.head.appendChild(scriptGoogle);

        // Apple Sign-In Initialization
        const scriptApple = document.createElement('script');
        scriptApple.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
        scriptApple.async = true;
        document.body.appendChild(scriptApple);

        scriptApple.onload = () => {
            window.AppleID.auth.init({
                clientId: 'com.chennaigames.webcges', // Your Services ID
                scope: 'name email',
                redirectURI: 'https://staging.chennaigames.com/esports', // Your callback URL
                state: generateState(16),
                usePopup: true,
            });
        };

        scriptApple.onerror = () => {
            console.error("Failed to load Apple Sign-In script");
        };

        // Cleanup scripts on component unmount
        return () => {
            document.head.removeChild(scriptGoogle);
            document.body.removeChild(scriptApple);
        };
    }, []);

    const generateState = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleSignOut = () => {
        setUser(null);
        sessionStorage.removeItem('user');
        window.google.accounts.id.disableAutoSelect();
    };

    const handleAppleSignIn = () => {
        window.AppleID.auth.signIn().then((response) => {
            if (response && response.authorization) {
                const idToken = response.authorization.id_token;
                const base64Url = idToken.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const payload = JSON.parse(jsonPayload);
                document.getElementById('user_name').innerText = payload.name;
                document.getElementById('login_btn').style.display = 'none';
                localStorage.setItem('name', payload.name);
                // openNav()
                localStorage.setItem('thirdPartySignin', true);
                console.log('User Name:', payload.name || 'Name not available');
                console.log('User Email:', payload.email || 'Email not available');
                DataFetcher('check_email', { email_id: payload.email }).then((apidata) => {

                    if (apidata) {
                        if (apidata.status == 'S' && apidata.response_code == 1) {
                            // console.log(apidata);
                            let registerdata = {
                                email_id: payload.email,
                                password: 'google_signin'
                            }
                            DataFetcher('login_user', registerdata).then((apidata) => {
                                console.log(apidata);
                                if (apidata.response_code == 1) {
                                    // if (api_name === 'login_user') {
                                    alert('Login Successfull');
                                    localStorage.setItem('token', apidata.token)
                                    // }
                                    document.getElementById('profile_coins').style.display = 'block';
                                    document.getElementById('login_btn').style.display = 'none';
                                    localStorage.setItem("name", apidata.uname);
                                    localStorage.setItem("user_id", apidata.user_id);

                                    closeNav();
                                    resetFormFields();
                                    window.location.reload();
                                } else if (apidata.response_code == 2) {
                                    alert(apidata.msg);
                                }
                            });
                        } else {
                            // alert('hello')
                            openNav();
                        }
                    }

                });
            }
        }).catch((error) => {
            console.error('Error during Apple Sign-In:', error);
        });
    };

    return (
        <div>
            {/* <h1>Sign-In Integration</h1> */}
            {/* {!user ? ( */}
            <>
                <div id='thirdparty_signin'>
                    <div id="googleButtonDiv"></div>
                    {/* <br></br> */}
                    <div id='empty' style={{ paddingTop: "10px" }}></div>
                    <div id="appleid-signin" data-color="black" data-border="true" style={{ height: '50px' }} data-type="sign in"></div>
                    <button id="appleSignInButton" onClick={handleAppleSignIn}>
                        {/* Sign in with Apple */}
                    </button>
                </div>
            </>
            {/* ) : ( */}
            {/* <div> */}
            {/* <img src={user.picture} alt="User Avatar" style={{ borderRadius: '50%' }} />
                    <p>Hello, {user.name}!</p>
                    <button id="signout-button" onClick={handleSignOut}>
                        Sign Out
                    </button> */}
            {/* </div> */}
            {/* )} */}
        </div>
    );
};

export default SignInComponent;
