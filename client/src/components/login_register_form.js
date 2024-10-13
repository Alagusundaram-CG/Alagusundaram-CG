/* global $ */
import React from 'react';
import DataFetcher from './fetch';
import Countries from '../data/countries.json';
const LoginSignupForm = () => {
    let isLoginMode = true;
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    function validatePassword() {

        const password = document.getElementById('password').value;
        const submitButton = document.getElementById('submit');
        // Validation points
        const length = document.getElementById('length');
        const uppercase = document.getElementById('uppercase');
        const number = document.getElementById('number');
        const special = document.getElementById('special');

        // Regular expressions
        const lengthPattern = /.{8,}/;
        const uppercasePattern = /[A-Z]/;
        const numberPattern = /\d/;
        const specialPattern = /[@$!%*?&]/;

        // Validation checks
        const isLengthValid = lengthPattern.test(password);
        const isUppercaseValid = uppercasePattern.test(password);
        const isNumberValid = numberPattern.test(password);
        const isSpecialValid = specialPattern.test(password);

        // Update validation points
        length.classList.toggle('valid', isLengthValid);
        uppercase.classList.toggle('valid', isUppercaseValid);
        number.classList.toggle('valid', isNumberValid);
        special.classList.toggle('valid', isSpecialValid);

        // Enable submit button if all checks are valid
        submitButton.disabled = !(isLengthValid && isUppercaseValid && isNumberValid && isSpecialValid);

    }

    function confirm_password() {
        const submitButton = document.getElementById('submit');
        const password = document.getElementById('password').value;
        const confirm_password = document.getElementById('confirm_password');
        const confirmpasswordHelp = document.getElementById('confirmpasswordHelp');
        if (password !== confirm_password.value) {
            confirm_password.style.color = 'red';
            confirmpasswordHelp.textContent = 'Incorrect Password';
            submitButton.disabled = true;
        } else {
            confirm_password.style.color = 'green';
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
        document.getElementById('usernameField').style.display = isLoginMode ? 'none' : 'block';
        document.getElementById('login_password').style.display = isLoginMode ? 'block' : 'none';
        resetFormFields();
        if (isLoginMode) {
            const submitButton = document.getElementById('submit');
            submitButton.disabled = false;
        }
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
            if (localStorage.getItem('thirdPartySignin')) {
                mail = localStorage.getItem('email') //'jai@gmail.com';
                password = 'google_signin'
            }
            console.log(mail + password + name + dob + gender + location);
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
            } else {
                alert('data missing')
            }
        }
        // alert(condition)
        if (condition) {
            DataFetcher(api_name, registerdata).then((apidata) => {
                console.log(apidata);
                if (apidata.response_code == 1) {
                    if (api_name === 'sign_up') {
                        alert('Successfully Registered. Verification Mail Sent to you.');
                    } else if (api_name === 'login_user') {
                        alert('Login Successfull');
                        localStorage.setItem('token', apidata.token);
                        if (window.location.href.includes("/esports/verify-account/")) {
                            window.location.href = "/esports";
                        }
                    }
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
        }
    }

    return (
        <>
            <form id="authForm">
                <div className='authField' id='usernameField' style={{ display: 'none' }} >
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className="form-group col-10">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" id="username" name='Enter username' placeholder="Enter username" required />
                        </div>
                    </div>
                </div>

                <div className='row authField'>
                    <div className='col-1'></div>
                    <div className="form-group col-10" id='signup_email'>
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='Enter email' placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>

                <div className='row authField'>
                    <div className='col-1'></div>
                    <div className="form-group col-10" id='login_password'>
                        <label for="lpassword">Password</label>
                        <input type="password" className="form-control" id="lpassword" name='Password' placeholder="Password" required />

                    </div>
                </div>

                <div id="signupFields" style={{ display: 'none' }}>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className="form-group col-10" id='signup_password'>
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" name='Password' placeholder="Password" required onInput={() => { validatePassword() }} />
                            <small id="passwordHelp" className="form-text text-muted">
                                Password must:
                            </small>
                            <small id="length" className="validation-point">Be at least 8 characters long</small><br />
                            <small id="uppercase" className="validation-point">Include an uppercase letter</small><br />
                            <small id="number" className="validation-point">Include a number</small><br />
                            <small id="special" className="validation-point">Include a special character (@$!%*?&)</small><br />

                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className="form-group col-10" id='signup_confirm_password'>
                            <label for="confirm_password">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm_password" name='confirm_password' placeholder="confirm_password" required onInput={() => { confirm_password() }} />
                            <small id="confirmpasswordHelp" className="form-text text-muted">
                            </small>
                        </div>
                    </div>
                    {/* <div className='row'>
                                    <div className='col-1'></div>
                                    <div className="form-group col-10">
                                        <label for="profile_picture">Profile Picture URL</label>
                                        <input type="url" className="form-control" id="profile_picture" placeholder="Enter profile picture URL" />
                                    </div>
                                </div> */}

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
                                {/* <option value="Afghanistan">Afghanistan</option>
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
                                <option value="Zimbabwe">Zimbabwe</option> */}

                                {Countries.map((element, index) => (
                                    <option key={index} value={element}>
                                        {element}
                                    </option>
                                ))}
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
            </form>
        </>
    )
}
export default LoginSignupForm;