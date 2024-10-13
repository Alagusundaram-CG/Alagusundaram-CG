/* global $ */
import React from 'react';
import DataFetcher from '../fetch';

export default function Request_form() {
    function submitgame(event) {
        event.preventDefault(); // Prevent the default form submission
        let game_title = $("#game_title").val();
        let game_url = $("#game_url").val();
        let game_engine = $("#game_engine").val();
        let game_user_name = $("#game_user_name").val();
        let game_user_email_id = $("#game_user_email_id").val();
        let game_desc = $("#game_desc").val();
        let studio_name = $("#studio_name").val();
        let report_data = {
            data: {
                title: game_title,
                link: game_url,
                engine: game_engine,
                name: game_user_name,
                email_id: game_user_email_id,
                info: game_desc,
                studio_name: studio_name
            }
        };

        DataFetcher('share_your_game', report_data).then((apidata) => {
            // console.log(apidata);
            if(apidata)
            {
                if (apidata.status === 'S') {
                    alert('Game submited Sucessfully');
                    window.location.reload();
                } else {
                    alert('Failed to save. Try after sometime');
                    //window.location.reload();
                }
            }
            else
            {
                alert('Failed to save. Try after sometime');
            }
            
        });
    }
    return (
        <>

            <div className='container'>
                <br></br>
                <div className='card card-4' style={{ backgroundColor: "black", borderRadius: "20px" }}>
                    <div className='card-body default-form contact-form'>
                        <form onSubmit={submitgame}>
                            <h3>
                                <b>About your game</b>
                            </h3>
                            <br></br>
                            <div className="form-group">
                                <label ><b>Your game title *</b></label>
                                <input type="text" className="form-control" id="game_title" placeholder="Enter the title of your game" required></input>
                            </div>
                            <div className="form-group">
                                <label ><b>Link to your game *</b></label>
                                <input type="text" className="form-control" id="game_url" placeholder="URL to your game" required></input>
                            </div>
                            <div className="form-group">
                                <label ><b>What engine is your game made in? *</b></label>
                                {/* <input type="text" className="form-control" id="game_engine" placeholder="Game engine name" required></input> */}
                                <select class="form-select" id="game_engine" aria-label="Default select example">
                                    <option value="" selected disabled>Select an engine</option>
                                    <option disabled></option>
                                    <option value="unity">Unity</option>
                                    <option value="cocos2d">Cocos2d</option>
                                    <option value="playcanvas">Playcanvas</option>
                                    <option value="away-js">Away-js</option>
                                    <option value="babylon-js">Babylon-js</option>
                                    <option value="booty5">Booty5</option>
                                    <option value="construct-2">Construct-2</option>
                                    <option value="construct-3">Construct-3</option>
                                    <option value="create-js">Create-js</option>
                                    <option value="defold">Defold</option>
                                    <option value="fancade">Fancade</option>
                                    <option value="flash">Flash</option>
                                    <option value="gamemaker">Gamemaker</option>
                                    <option value="gdevelop">Gdevelop</option>
                                    <option value="gideros">Gideros</option>
                                    <option value="godot">Godot</option>
                                    <option value="haxe">Haxe</option>
                                    <option value="haxeflixel">Haxeflixel</option>
                                    <option value="impact-js">Impact-js</option>
                                    <option value="layabox">Layabox</option>
                                    <option value="native-javascript">Native-javascript</option>
                                    <option value="phaser">Phaser</option>
                                    <option value="pixi-js">Pixi-js</option>
                                    <option value="ruffle">Ruffle</option>
                                    <option value="solar2d">Solar2d</option>
                                    <option value="stencyl">Stencyl</option>
                                    <option value="three-js">Three-js</option>
                                    <option value="tingly">Tingly</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label ><b>More information about your game *</b></label>
                                <textarea type="text" className="form-control" rows={"5"} id="game_desc" placeholder="Tell us a bit more about your game" required></textarea>
                                <small id="text" className="form-text text-muted">Short description, mobile compatibility, file size, etc.</small>
                            </div>
                            <h3>
                                <b>About you</b>
                            </h3>
                            <br></br>
                            <div className="form-group">
                                <label ><b>Your name *</b></label>
                                <input type="text" className="form-control" id="game_user_name" placeholder="Enter your name" required></input>
                            </div>
                            <div className="form-group">
                                <label ><b>Your email address *</b></label>
                                <input type="email" className="form-control" id="game_user_email_id" aria-describedby="emailHelp" placeholder="Enter your email address" required></input>
                                <small id="text" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label ><b>Studio or developer name *</b></label>
                                <input type="text" className="form-control" id="studio_name" placeholder="Enter your studio or developer name" required></input>
                            </div>
                            <h6>The team is looking forward to give your game a spin.</h6>
                            <br></br>
                            <button type="submit" style={{ borderRadius: "50px", borderColor: '#ff7d00', backgroundColor: '#ff7d00' }} className="btn btn-primary btn-lg" required><b>Submit</b></button>
                        </form>
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
        </>
    )
}