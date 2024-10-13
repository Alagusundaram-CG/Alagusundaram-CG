/* global $ */
import React, { useEffect } from 'react';
import SignInComponent from './sign_in_component';
import DataFetcher from './fetch';
import LoginSignupForm from './login_register_form';

export default function EsportsHeader() {
    function openNav() {
        // document.getElementById("mySidenav").style.width = "350px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    document.querySelectorAll('.dropdown-toggle').forEach(item => {
        item.addEventListener('click', event => {

            alert('qs')
            if (event.target.classList.contains('dropdown-toggle')) {
                event.target.classList.toggle('toggle-change');

            }
            else if (event.target.parentElement.classList.contains('dropdown-toggle')) {
                event.target.parentElement.classList.toggle('toggle-change');
            }
        })
    });
    function logout() {
        localStorage.clear();
        // document.getElementById('profile_coins').style.display = 'none';
        // document.getElementById('login_btn').style.display = 'block';
    }
    let isLoginMode = true;

    function toggleFormMode() {
        isLoginMode = !isLoginMode;
        document.getElementById('nav_header').textContent = isLoginMode ? 'Log in' : 'Sign up';
        document.getElementById('toggleButton').textContent = isLoginMode ? 'Sign Up' : 'Login';
        document.getElementById('toggleMessage').textContent = isLoginMode ? 'New to Chennaigames?' : 'Already have an account?';

        // Toggle the visibility of signup fields
        const signupFields = document.getElementById('signupFields');
        signupFields.style.display = isLoginMode ? 'none' : 'block';
        document.getElementById("submit").value = isLoginMode ? "login_user" : "sign_up"
        // Toggle the username field visibility
        // document.getElementById('usernameField').style.display = isLoginMode ? 'none' : 'block';
        // document.getElementById('login_password').style.display = isLoginMode ? 'block' : 'none';
        resetFormFields();
        if (isLoginMode) {
            const submitButton = document.getElementById('submit');
            submitButton.disabled = false;
        }
    }

    function validatePassword() {

        const password = document.getElementById('password').value;
        const submitButton = document.getElementById('submit');
        const passwordHelp = document.getElementById('passwordHelp');

        // Regular expression to check the password strength
        const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (strongPasswordPattern.test(password)) {
            // passwordHelp.style.color = 'green';
            passwordHelp.textContent = 'Strong password!';
            submitButton.disabled = false;
            // alert(1)
        } else {
            // passwordHelp.style.color = 'red';
            passwordHelp.textContent = 'Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.';
            submitButton.disabled = true;
        }
    }
    function confirm_password() {
        const submitButton = document.getElementById('submit');
        const password = document.getElementById('password').value;
        const confirm_password = document.getElementById('confirm_password');
        const confirmpasswordHelp = document.getElementById('confirmpasswordHelp');
        if (password !== confirm_password.value) {
            // confirm_password.style.color = 'red';
            confirmpasswordHelp.textContent = 'Incorrect Password';
            submitButton.disabled = true;
        } else {
            // confirm_password.style.color = 'green';
            confirmpasswordHelp.textContent = '';
            submitButton.disabled = false;
        }
    }
    function resetFormFields() {
        const inputs = document.querySelectorAll('#authForm input');
        inputs.forEach(input => input.value = '');
        document.getElementById('location').selectedIndex = 0; // Reset dropdown
        document.getElementById('gender').selectedIndex = 0; // Reset dropdown
    }

    function sumbitapi() {
        let api_name = document.getElementById("submit").value
        let mail = $("#email").val();
        let password = $("#lpassword").val();

        // alert(mail + password + api_name)
        console.log(mail, password);
        let registerdata = {
            email_id: mail,
            password: password
        }
        let condition = false;

        if (api_name === 'login_user') {
            if (mail && password) {
                condition = true;
            }
        }
        if (api_name === 'sign_up') {
            let password = $("#password").val();
            let name = $("#username").val();
            let dob = $("#dob").val();
            let gender = $("#gender").val();
            let location = $("#location").val();
            console.log(password + name + dob + gender + location);
            if (name && mail && password && dob && gender && location) {
                registerdata = {
                    email_id: mail,
                    password: password,
                    user_name: name,
                    dob: dob,
                    gender: gender,
                    location: location
                }
                condition = true;
            }
        }
        // alert(condition)
        if (condition) {
            DataFetcher(api_name, registerdata).then((apidata) => {
                console.log(apidata);
                if (apidata.response_code == 1) {
                    if (api_name === 'sign_up') {
                        alert('Successfully Registered');
                    } else if (api_name === 'login_user') {
                        alert('Login Successfull');
                        localStorage.setItem('token', apidata.token)
                    }
                    // document.getElementById('profile_coins').style.display = 'block';
                    // document.getElementById('login_btn').style.display = 'none';
                    localStorage.setItem("name", apidata.uname);
                    localStorage.setItem("user_id", apidata.user_id);
                    closeNav();
                } else if (apidata.response_code == 2) {
                    alert(apidata.msg);
                }
            });
        }
    }
    useEffect(() => {
        let user_name = localStorage.getItem('name');
        // let user_id = localStorage.getItem('user_id');
        if (user_name) {

            // document.getElementById('profile_coins').style.display = 'block';
            // document.getElementById('login_btn').style.display = 'none';
        } else {
            // document.getElementById('profile_coins').style.display = 'none';
            // document.getElementById('login_btn').style.display = 'block';

        }
    }, []);
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
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
                {/* <form id="authForm">
                    <div className='authField' id='usernameField' style={{ display: 'none' }} >
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className="form-group col-10">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                            </div>
                        </div>
                    </div>

                    <div className='row authField'>
                        <div className='col-1'></div>
                        <div className="form-group col-10">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>

                    <div className='row authField'>
                        <div className='col-1'></div>
                        <div className="form-group col-10" id='login_password'>
                            <label for="lpassword">Password</label>
                            <input type="password" className="form-control" id="lpassword" placeholder="Password" required />

                        </div>
                    </div>

                    <div id="signupFields" style={{ display: 'none' }}>
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className="form-group col-10">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" required onInput={() => { validatePassword() }} />
                                <small id="passwordHelp" className="form-text text-muted">
                                    Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.
                                </small>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className="form-group col-10">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm_password" placeholder="confirm_password" required onInput={() => { confirm_password() }} />
                                <small id="confirmpasswordHelp" className="form-text text-muted">
                                </small>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-1'></div>
                            <div className="form-group col-10">
                                <label for="dob">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" required />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-1'></div>
                            <div className="form-group col-10">
                                <label for="gender">Gender</label>
                                <select className="form-control" id="gender" required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer_not_to_say">Prefer not to say</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-1'></div>
                            <div className="form-group col-10">
                                <label for="location">Location</label>
                                <select className="form-control" id="location" required>
                                    <option value="" disabled selected>Select Country</option>
                                    <option value="" disabled selected>Select Country</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini">Eswatini</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="North Macedonia">North Macedonia</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestine State">Palestine State</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City">Vatican City</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-5'></div>
                        <button type="submit" id='submit' className="btn btn-primary" value={'login_user'} onClick={() => { sumbitapi() }}>Submit</button>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-7' id='new_user_txt'>
                            <p id="toggleMessage">New to Chennaigames?</p>
                        </div>
                        <div className='col-3' style={{ justifyContent: 'left' }}>
                            <h5 id='toggleButton' onClick={() => toggleFormMode()}>Sign Up</h5>
                        </div>
                    </div>
                </form> */}
            </div>
            {/* <header >
                <div className='row' style={{ padding: "10px" }}>
                    <div className='col-3' style={{ paddingLeft: '70px' }}>
                        <div className="logo pull-left">
                            <a href="/home" title=""><img src="images/logo.avif" alt="" title="" /></a>
                        </div>
                    </div>

                    <div className='col-4'></div>


                    <div className='col-5' id='profile_coins' style={{ alignContent: 'center' }}>
                        <div className='row' >
                            <div className='col-5'>
                                <button className='btn' style={{ borderRadius: "50px", height: '50px' }}>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img src="images/og.avif" style={{ borderRadius: "50px" }} width='100px' alt="" title="" />
                                        </div>
                                        <div className='col-4'>
                                            <p>0 coins</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-5'>
                                <button className='btn' style={{ borderRadius: "50px", height: '50px' }}>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img src="images/og.avif" style={{ borderRadius: "50px" }} width='80px' alt="" title="" />
                                        </div>
                                        <div className='col-4'>
                                            <p>0 tokens</p>

                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='col-2' id='logout' style={{ alignContent: 'center' }}>
                                <i style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => logout()} className="bi bi-box-arrow-right"></i>
                            </div>
                        </div>

                    </div>
                    <div className='col-5' style={{ alignContent: 'center' }} id='login_btn'>
                        <div className='row'>
                            <div className='col-10'></div>
                            <div className='col-2'>
                                <button className='btn' onClick={() => openNav()} style={{ borderRadius: '20px' }}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </header> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a href="/home" title=""><img src="images/logo.avif" alt="" title="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li> */}
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div class="profile-pic">
                                        <img src="https://source.unsplash.com/250x250?girl" alt="Profile Picture"></img>
                                    </div>

                                    <i class="fas fa-user"></i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-sliders-h fa-fw"></i> Account</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-cog fa-fw"></i> Settings</a></li>
                                    <li>
                                        <hr class="dropdown-divider"></hr>
                                    </li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}