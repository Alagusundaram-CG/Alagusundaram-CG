/* global $ */
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
// import gamedata from '../data/webgames.json'
import { useParams } from 'react-router-dom';
// import GameCards from '../components/webgames/gamecard';
import DataFetcher from '../components/fetch';
import Replacer from '../components/replace';
import Modal from 'react-modal';
// import './Popup.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '500px',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 1000,  // Ensure the modal is on top
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a dark overlay
        zIndex: 999,  // Ensure the overlay is behind the modal but on top of other content
    }
};
var countDownDate;
function datatablecall() {
    let contest = $('#contest').val();
    let user_id;
    if (localStorage.getItem('user_id')) {
        user_id = localStorage.getItem('user_id');
    }

    let inputObj = { contest: contest, user_id: user_id }

    $('#users').DataTable({
        "bDestroy": true,
        "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
        "paging": false,//Dont want paging     
        "lengthChange": false,
        "bPaginate": false,
        "serverSide": true,
        "bAutoWidth": false,
        "searching": false,
        pagingType: 'numbers',
        responsive: true,
        pageLength: 10,
        lengthMenu: [11],

        "ajax": {
            // url: 'http://localhost:3001/api/get_top_10',
            url: 'https://staging.chennaigames.com/api/get_top_10',
            data: inputObj,
            type: 'POST',
            dataType: 'json',
        },

        "columns": [
            { "data": "rank", orderable: false },
            { "data": "name", orderable: false },
            { "data": "score", orderable: false },
            { "data": "reward", orderable: false },
        ],
        "initComplete": function (settings, json) {
            console.log(json.end_time, 'JSON DATA FROM SERVER')
            countDownDate = new Date(json.end_time).getTime();
            updateTimer(countDownDate)
            // Highlight the 10th row
            // $('#users tbody tr:eq(10)').removeClass('highlight');
            $('#users tbody tr:eq(10)').addClass('highlight');
        }
    });
}


function updateTimer(countDownDate) {
    // alert(countDownDate)
    if (countDownDate) {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }
}
const timerInterval = setInterval(() => {
    if (countDownDate) {
        updateTimer(countDownDate);
    }
    // alert(1)
}, 1000);
function shortenNumber(number) {
    number = parseInt(number);
    let shortNumber = 0;
    if (number < 1000) {
        return number;
    }
    if (number !== 0) {
        // Define the array of suffixes for different magnitudes
        const suffixes = ['', 'K', 'M', 'B', 'T', 'Q'];

        // Find the appropriate suffix for the number
        const suffixIndex = Math.floor(Math.log10(Math.abs(number)) / 3);

        // Calculate the scaled number
        const scaledNumber = number / Math.pow(1000, suffixIndex);

        // Format the scaled number
        const formattedNumber = scaledNumber.toFixed(2);

        // Append the suffix
        shortNumber = formattedNumber + suffixes[suffixIndex];
    }
    return shortNumber;
}

// Modal.setAppElement('#root');

const Popup = ({ isOpen, GameInfo, onClose, children }) => {

    function submitReport() {
        let report_issue = $("#report_issue").val();
        let report_email = $("#report_email").val();
        let report_message = $("#report_message").val();

        if (report_issue === "0" || report_issue === null) { alert("Choose any issue"); return false; }

        let report_data = {
            game_id: GameInfo.game_id,
            data: {
                issue: report_issue,
                email: report_email,
                message: report_message
            }
        }

        DataFetcher('report', report_data).then((apidata) => {
            $("#popupformcontainer").css("display", "none");
            $("#popupresponsecontainer").css("display", "block");
        });
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='btn btn-danger' onClick={onClose} style={{ float: 'right', backgroundColor: "#ff7d00", borderColor: "#ff7d00", boxShadow: "#ff7d00", color: "#fff" }}>X</button>
            {children}

            <div className='container' id='popupformcontainer'>
                <br /><br />
                <div className='col-12'>
                    <label>Issue:</label>
                    <select className='form-control' id='report_issue'>
                        <option value="0" disabled selected hidden>Tell us the issue?</option>
                        <option value="The game doesn't load">The game doesn't load</option>
                        <option value="The game is not working">The game is not working</option>
                        <option value="I saw something inappropriate">I saw something inappropriate</option>
                        <option value="I have a suggestion">I have a suggestion</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <br />
                <div className='col-12' >
                    <label>Email:<small>(Optional)</small></label>
                    <input className='form-control' placeholder='Enter your email address' id='report_email' />
                </div>
                <br />
                <div className='col-12'>
                    <label>Message:</label>
                    <textarea className='form-control' rows={5} placeholder='Provide some details' id='report_message'></textarea>
                </div>
                <br />
                <div className='col-12' align="center">
                    <button className='btn btn-warning' style={{ backgroundColor: "#ff7d00", borderColor: "#ff7d00", boxShadow: "#ff7d00", color: "#fff" }} onClick={() => { submitReport() }}>SEND REPORT</button>
                </div>
            </div>
            <div className='container' id='popupresponsecontainer' style={{ display: "none" }}>
                <br /><br /><br />
                <div className='col-12' align="center" style={{ color: "#ff7d00", fontWeight: 'bolder' }}>
                    <h2>THANK YOU!</h2>
                    <h1>Your feedback saved successfully</h1>
                </div>
                <br /><br /><br /><br />
            </div>

        </Modal>
    );
};

const GameEmbed = (GameInfo) => {
    GameInfo = GameInfo.game;
    let game_url = GameInfo.game_url;
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
    return (
        <div id='iframe-div' style={{ height: "0px", width: "100%", alignItems: 'center', justifyContent: 'center', borderRadius: '5px', zIndex: '5' }}>
            <div id='float_button' style={{
                top: "5%",
                left: "0px",
                position: "absolute",
                alignItems: "center",
                borderRadius: "0px 30px 30px 0px",
                backgroundColor: "#ffffff",
                display: "flex",
                visibility: "hidden",
                height: "35px",
                opacity: "50%",
                justifyContent: "flex-start",
                marginTop: "10px",
                marginBottom: "10px",
                width: "60px",
                zIndex: "15"
            }} onClick={() => { exitFullscreen() }}>

                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"
                    style={{
                        marginLeft: "2px",
                        width: "17px",
                        height: "17px",
                        color: "rgb(104, 66, 255)"
                    }}><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7424 21.6699C16.3724 22.08 15.7401 22.1124 15.3301 21.7424L7.0186 14.2424C5.66045 13.0169 5.66046 10.9831 7.0186 9.75758L15.3301 2.25759C15.7401 1.88759 16.3724 1.92004 16.7424 2.33007C17.1124 2.7401 17.08 3.37243 16.6699 3.74242L8.35847 11.2424C7.8805 11.6737 7.8805 12.3263 8.35847 12.7576L16.6699 20.2576C17.08 20.6276 17.1124 21.2599 16.7424 21.6699Z"></path></svg>
                <img src="../images/favicon/android-icon-144x144.avif" alt="Logo Icon" style={{ fill: "rgb(0, 0, 0)", width: "36px" }} ></img>
            </div>
            <iframe
                id='game_frame'
                // ref={iframeRef}
                src={game_url + "?gd_sdk_referrer_url=https://chennaigames.com/games/" + GameInfo.game_id}
                style={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
                width="0"
                height="0"
                scrolling="none"
                frameBorder="0"
                title="Game Embed"
                tabIndex={0}
                allowFullScreen
            ></iframe>
        </div>
    );
}


export default function Content() {
    let id = useParams();
    const [GameInfo, setGameInfo] = useState('');
    const [GameName, setGameName] = useState('');
    // const [GameData, setGameData] = useState([]);

    const [GameDescription, setGameDescription] = useState('');
    const [GameInstruction, setGameInstruction] = useState('');
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    if (modalIsOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    // Mobile / Tablet width
    if (window.innerWidth < 1100) {
        // resolution_check = true
        $('#preview').css('visibility', 'visible');
        $('#game_frame').css('visibility', 'hidden');
        $('.fullscreen_text').css('display', 'none')

    } else {
        $('#preview').css('display', 'none');
        $('#game_frame').attr("width", "800");
        $('#game_frame').attr("height", "600");
        $('#iframe-div').css("height", "600px");
        $('.fullscreen_text').css('display', 'block')
    }

    const enterFullscreen = () => {

        let iframe = document.getElementById('iframe-div');
        if (window.innerWidth < 1100) {
            document.getElementById('game_frame').src = GameInfo.game_url + "?gd_sdk_referrer_url=https://chennaigames.com/games/" + GameInfo.game_id;
        }
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen().then(() => {
                    $('#preview').css('visibility', 'hidden');
                    $('#game_frame').attr("width", "100%");
                    $('#game_frame').attr("height", "100%");
                    $('#game_frame').css('visibility', 'visible');
                    $('#float_button').css('visibility', 'visible');
                    lockOrientation();
                });
            }
            else if (iframe.mozRequestFullScreen) { // Firefox
                iframe.mozRequestFullScreen().then(() => {
                    $('#preview').css('visibility', 'hidden');
                    $('#game_frame').attr("width", "100%");
                    $('#game_frame').attr("height", "100%");
                    $('#game_frame').css('visibility', 'visible');
                    $('#float_button').css('visibility', 'visible');
                    lockOrientation();
                });
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
                console.log('h1 3');
                iframe.webkitRequestFullscreen().then(() => {
                    $('#preview').css('visibility', 'hidden');
                    $('#game_frame').attr("width", "100%");
                    $('#game_frame').attr("height", "100%");
                    $('#game_frame').css('visibility', 'visible');
                    $('#float_button').css('visibility', 'visible');
                    lockOrientation();
                });
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                console.log('h1 4');
                iframe.msRequestFullscreen().then(() => {
                    $('#preview').css('visibility', 'hidden');
                    $('#game_frame').attr("width", "100%");
                    $('#game_frame').attr("height", "100%");
                    $('#game_frame').css('visibility', 'visible');
                    $('#float_button').css('visibility', 'visible');
                    lockOrientation();
                });
            } else if (iframe.webkitEnterFullscreen) { // iOS Safari
                console.log('h1 5');
                iframe.webkitEnterFullscreen().then(() => {
                    $('#preview').css('visibility', 'hidden');
                    $('#game_frame').attr("width", "100%");
                    $('#game_frame').attr("height", "100%");
                    $('#game_frame').css('visibility', 'visible');
                    $('#float_button').css('visibility', 'visible');
                    lockOrientation();
                });
            }
        }
    };
    document.addEventListener('fullscreenchange', function () {
        if (!document.fullscreenElement) {
            if (window.innerWidth < 1100) {
                $('#game_frame').attr("width", "1");
                $('#game_frame').attr("height", "1");
                document.getElementById('game_frame').src = "about:blank"
                $('#preview').css('visibility', 'visible');
                $('#game_frame').css('visibility', 'hidden');
            }
            $('#float_button').css('visibility', 'hidden');
        }
    });
    const lockOrientation = () => {
        /* eslint-disable no-restricted-globals */
        // setIsMobileres(game_url[id.id].screen)
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock(`${GameInfo.screen}`).catch(err => {
                console.error('Failed to lock orientation:', err);
                // alert(err)
            });
        }
        /* eslint-disable no-restricted-globals */
    };


    // Start the timer when the page is loaded
    const [metadata, setMetadata] = useState({
        title: "",
        meta_description: "",
        meta_keywords: ["chennaigames"]
    });
    // const [event_time, setEventtime] = useState([]);
    useEffect(() => {

        let timeoutId;


        let isMounted = true;

        DataFetcher('get_game_info', id).then((data) => {
            if (isMounted) {
                setGameInfo(data);
                setMetadata(data);
                // setGameDescription(data.description);
                // setGameInstruction(data.instruction);
                setGameDescription(<Replacer data={data.description} />)
                setGameInstruction(<Replacer data={data.instruction} />)
                setGameName(data.title);

                setLike(data.likes);
                setDislike(data.dislikes);

                if (parseInt(localStorage.getItem('vote_' + data.game_id)) === 1) {
                    $('#like').css('color', '#ff7d00');

                    $('#like1').css('color', '#ff7d00');
                }
                else if (parseInt(localStorage.getItem('vote_' + data.game_id)) === 2) {
                    $('#dislike').css('color', '#ff7d00');

                    $('#dislike1').css('color', '#ff7d00');
                }

                let recentlyPlayed = JSON.parse(localStorage.getItem('favoriteGames')) || [];

                if (recentlyPlayed.includes(data.game_id)) {
                    $('#favorite').css('color', '#ff7d00');

                    $('#favorite1').css('color', '#ff7d00');
                } else {
                    $('#favorite').css('color', '#fff');

                    $('#favorite1').css('color', '#fff');
                }
            }
        });
        DataFetcher('get_webgames', { game_ids: [GameInfo.game_id] }).then((apidata) => {
            if (isMounted) {
                // setGameData(apidata);
            }
        });
        DataFetcher('get_contest', id).then((apidata) => {
            // if (isMounted) {
            if (apidata) {
                console.log(apidata, 'apidata');

                $('#contest').empty();
                // let val ;
                for (let i = 0; i < apidata.length; i++) {
                    let html = ''
                    if (i === 0) {
                        html = `<option value="${apidata[i].id}" selected>${apidata[i].name} </option>`
                    } else {
                        html = `<option value="${apidata[i].id}">${apidata[i].name} </option>`
                    }
                    $('#contest').append(html);
                }
                datatablecall()
            }
            // }
        });
        const resetTimer = () => {
            // Clear the timer if it exists
            console.log(timeoutId, 'timeout');
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        };
        const startTimer = () => {
            // Set a timer for 10 seconds to increase the view count
            resetTimer();

            console.log('startTimer');
            timeoutId = setTimeout(() => {
                DataFetcher('game_count', { game_id: GameInfo.game_id });
            }, 10000);
        };
        startTimer();
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // If the page becomes hidden, reset the timer
                resetTimer();
            } else {
                // If the page becomes visible again, restart the timer
                startTimer();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            isMounted = false;
            resetTimer();
            document.removeEventListener('visibilitychange', handleVisibilityChange);

        };
    }, [id, GameInfo.game_id])
    // render() {

    function updateGameVote(type) {

        let votekey = 'vote_' + GameInfo.game_id;
        let existing_vote_value = localStorage.getItem(votekey);

        console.log(parseInt(existing_vote_value));
        if (parseInt(existing_vote_value) === null || isNaN(parseInt(existing_vote_value))) {
            //increment
            DataFetcher('like_dislike', { game_id: GameInfo.game_id, data: [{ type: parseInt(type), value: 1 }] }).then((apidata) => {
                if (parseInt(type) === 1) {
                    setLike(like + 1);
                }
                else if (parseInt(type) === 2) {
                    setDislike(dislike + 1);
                }
            });
        }
        else if (parseInt(existing_vote_value) === parseInt(type)) {
            //remove vote what i clicked
            DataFetcher('like_dislike', { game_id: GameInfo.game_id, data: [{ type: parseInt(type), value: -1 }] }).then((apidata) => {
                if (parseInt(type) === 1) {
                    setLike(like - 1);
                }
                else if (parseInt(type) === 2) {
                    setDislike(dislike - 1);
                }
            });
        }
        else if (parseInt(existing_vote_value) !== parseInt(type)) {
            //Change the vote
            DataFetcher('like_dislike', { game_id: GameInfo.game_id, data: [{ type: parseInt(type), value: 1 }, { type: parseInt(existing_vote_value), value: -1 }] }).then((apidata) => {
                if (parseInt(type) === 1 && parseInt(existing_vote_value) === 2) {
                    setLike(like + 1);
                    setDislike(dislike - 1);
                }
                else if (parseInt(type) === 2 && parseInt(existing_vote_value) === 1) {
                    setDislike(dislike + 1);
                    setLike(like - 1);
                }
            });
        }

        if (parseInt(existing_vote_value) === parseInt(type)) {
            // Delete the exist one and decr the count
            localStorage.removeItem(votekey);
            if (parseInt(type) === 1) {
                $('#like').css('color', '#fff');
                $('#like>i').removeClass('animate__jello');

                $('#like1').css('color', '#fff');
                $('#like1>i').removeClass('animate__jello');

            }
            else if (parseInt(type) === 2) {
                $('#dislike').css('color', '#fff');
                $('#dislike>i').removeClass('animate__jello');

                $('#dislike1').css('color', '#fff');
                $('#dislike1>i').removeClass('animate__jello');
            }
        }
        else {
            // change the vote
            localStorage.setItem(votekey, type);
            $('#like>i').removeClass('animate__jello');
            $('#dislike>i').removeClass('animate__jello');

            $('#like1>i').removeClass('animate__jello');
            $('#dislike1>i').removeClass('animate__jello');
            //Swapping the colors while changing the decision
            if (parseInt(type) === 1) {
                $('#like').css('color', '#ff7d00');
                $('#like>i').addClass('animate__jello');
                $('#dislike').css('color', '#fff');

                $('#like1').css('color', '#ff7d00');
                $('#like1>i').addClass('animate__jello');
                $('#dislike1').css('color', '#fff');
            }
            else if (parseInt(type) === 2) {
                $('#dislike').css('color', '#ff7d00');
                $('#dislike>i').addClass('animate__jello');
                $('#like').css('color', '#fff');

                $('#dislike1').css('color', '#ff7d00');
                $('#dislike1>i').addClass('animate__jello');
                $('#like1').css('color', '#fff');
            }
        }
    }

    const favoriteThisGame = (gameId) => {
        let recentlyPlayed = JSON.parse(localStorage.getItem('favoriteGames')) || [];

        if (recentlyPlayed.includes(gameId)) {
            const index = recentlyPlayed.indexOf(gameId);
            if (index > -1) { // only splice array when item is found
                recentlyPlayed.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem('favoriteGames', JSON.stringify(recentlyPlayed));
            $('#favorite').css('color', '#fff');
        } else {
            // Retrieve the existing recently played game IDs from localStorage
            let recentlyPlayed = JSON.parse(localStorage.getItem('favoriteGames')) || [];

            // Add the clicked game ID to the beginning of the list, filtering out duplicates
            recentlyPlayed = [gameId, ...recentlyPlayed.filter(id => id !== gameId)];

            // Optional: Limit the number of recently played games stored
            recentlyPlayed = recentlyPlayed.slice(0, 6);

            // Save the updated list to localStorage
            localStorage.setItem('favoriteGames', JSON.stringify(recentlyPlayed));
            $('#favorite').css('color', '#ff7d00');
        }
    }


    return (
        <>
            <Helmet>
                <title>{metadata.title} | Dive into ChennaiGames</title>
                <meta name="description" content={metadata.meta_description} />
                {/* <meta name="keywords" content={metadata.meta_keywords.join(", ")} /> */}
            </Helmet>
            <div className="container-fluid" style={{ backgroundImage: "url('../images/esport_banners/thar4.png')", backgroundAttachment: "fixed", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                <br />
                <div className="col-lg-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-2 col-sm-12"></div>
                        <div className="col-lg-8 col-sm-12">
                            {/* GAMEPLAY USER INTERFACE */}

                            <div className="col-lg-12 col-sm-12" >
                                {/* style={{backgroundImage: 'linear-gradient(to bottom right, #268bab, #cf008d)', borderRadius: '10px' }} */}

                                <div className="row w-110" id='preview' tabIndex={0} style={{ padding: '20px', visibility: 'hidden', }}>
                                    <div className="col-12 text-center d-flex justify-content-center">
                                        <img src={`.${GameInfo.thumbnail_image}`} alt="logo" className="img-fluid" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}></img>
                                    </div>
                                    &nbsp;
                                    <div className="col-12 text-center justify-content-center">
                                        <button id='play' type="button" className="btn btn-light btn-lg" style={{ background: "#ff7d00", color: "#fff", outlineColor: "none" }} onClick={() => { enterFullscreen(); }}><b>PLAY NOW</b></button>
                                    </div>

                                    <div className='col-12 text-center justify-content-center'><br /><br />
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className="vote">
                                                    <span id='like1' className='gameplayer_footer_group' title='Like' onClick={() => { updateGameVote(1) }}>
                                                        <i className="icon fa fa-2x fa-thumbs-up animate__animated"></i><br />
                                                        <span style={{ paddingLeft: '10px' }}>{shortenNumber(like)}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="vote">
                                                    <span id='dislike1' className='gameplayer_footer_group' title='Dislike' onClick={() => { updateGameVote(2) }}>
                                                        <i className="icon fa fa-2x fa-thumbs-down animate__animated"></i><br />
                                                        <span style={{ paddingLeft: '10px' }}>{shortenNumber(dislike)}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <div className='col-2'></div> */}
                                            <div className='col-3'>
                                                <div className="vote">
                                                    <span id='favorite1' className='gameplayer_footer_group' title='Favorite' onClick={() => { favoriteThisGame(GameInfo.game_id) }}>
                                                        <i className="icon fa fa-2x fa-heart animate__animated"></i><br />
                                                        <span>Favorite</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                <div className="vote">

                                                    <span className='gameplayer_footer_group' title='Report & Feedback' onClick={() => setModalIsOpen(true)}>
                                                        <i className="icon fa fa-2x fa-exclamation-circle"></i><br />
                                                        <span>Report</span>
                                                        {/* <span style={{ paddingLeft: '10px' }}>Feedback</span> */}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <GameEmbed game={GameInfo} />
                                {/* <div className="bottom-strip" style={{ backgroundColor: '#222', padding: '5px 10px 5px 10px', marginTop: '0px', borderRadius: '0px 0px 10px 10px' }}>
                                    <div className="row align-items-center" style={{ padding: '0px 5px' }}>
                                        <div className="col-12 col-lg-6 col-sm-12 ">

                                            <div className="logo-aligned">
                                                <img src="../images/cg_logo_white.png" width="30" alt="" />
                                                <span className='game_name_footer '>&nbsp;&nbsp;&nbsp;&nbsp;{GameName}</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-6 col-sm-6 fullscreen_text">

                                            <div className="" style={{ textAlign: 'right' }}>
                                                <span title='Fullscreen' className="icon fa fa-2x fa-expand game_footer_text" onClick={() => { enterFullscreen() }}></span>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div> */}

                                <div className="bottom-strip" style={{ backgroundColor: '#222', padding: '5px 10px 5px 10px', marginTop: '0px', borderRadius: '0px 0px 10px 10px' }}>
                                    <div className="row align-items-center" style={{ padding: '0px 5px' }}>
                                        <div className="col-12 col-lg-6 col-sm-12 ">

                                            <div className="logo-aligned">
                                                <img src="../images/cg_logo_white.png" width="30" alt="" />
                                                <span className='game_name_footer '>&nbsp;&nbsp;&nbsp;&nbsp;{GameName}</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-6 col-sm-6 fullscreen_text">
                                            <div className='row'>
                                                <div className='col-5'>

                                                    <div className="vote">
                                                        <span id='like' className='gameplayer_footer_group' title='Like' onClick={() => { updateGameVote(1) }}>
                                                            <i className="icon fa fa-thin fa-thumbs-up animate__animated"></i>
                                                            <span style={{ paddingLeft: '5px' }}>{shortenNumber(like)}</span>
                                                        </span>

                                                        <span style={{ margin: '0px 10px 0px 10px', fontSize: '25px', userSelect: 'none' }}>|</span>
                                                        <span id='dislike' className='gameplayer_footer_group' title='Dislike' onClick={() => { updateGameVote(2) }}>
                                                            <i className="icon fa fa-thin fa-thumbs-down animate__animated"></i>
                                                            <span style={{ paddingLeft: '5px' }}>{shortenNumber(dislike)}</span>
                                                        </span>
                                                    </div>

                                                </div>

                                                <div className='col-3'>
                                                    <div className="vote">
                                                        <span id='favorite' className='gameplayer_footer_group' title='Favorite' onClick={() => { favoriteThisGame(GameInfo.game_id) }}>
                                                            <i className="icon fa fa-thin fa-heart animate__animated"></i>
                                                        </span>

                                                        <span style={{ margin: '0px 10px 0px 10px', fontSize: '25px', userSelect: 'none' }}>|</span>
                                                        <span className='gameplayer_footer_group' title='Report & Feedback' onClick={() => setModalIsOpen(true)}>
                                                            <i className="icon fa fa-solid fa-exclamation-circle"></i>
                                                            {/* <span style={{ paddingLeft: '10px' }}>Feedback</span> */}
                                                        </span>
                                                    </div>

                                                    <Popup isOpen={modalIsOpen} GameInfo={GameInfo} onClose={() => setModalIsOpen(false)} />
                                                </div>
                                                <div className='col-3'>
                                                    {/* <div className="vote">
                                                    <span id='like' className='gameplayer_footer_group' title='Favorite'>
                                                            <i className="icon fa fa-thin fa-eye animate__animated"></i>
                                                            <span style={{paddingLeft:'5px'}}>{shortenNumber(dislike)}</span>
                                                    </span>

                                                    <span style={{margin:'0px 10px 0px 10px',fontSize:'25px'}}></span>
                                                </div> */}

                                                    {/* <Popup isOpen={modalIsOpen} GameInfo={GameInfo} onClose={() => setModalIsOpen(false)}/> */}
                                                </div>
                                                <div className='col-1'>
                                                    <div className="" style={{ textAlign: 'right' }}>
                                                        <span title='Fullscreen' className="icon fa fa-2x fa-expand game_footer_text" onClick={() => { enterFullscreen() }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="" style={{ textAlign: 'right' }}>
                                                <span title='Fullscreen' className="icon fa fa-2x fa-expand game_footer_text" onClick={() => { enterFullscreen() }}></span>
                                            </div> */}
                                            {/* style={{ color: '#fff', fontSize: '20px', fontWeight: 'bolder' }} */}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* RELATED GAMES */}

                            {/* GAME DETAILS*/}
                            <div className="col-lg-12">
                                <br />
                                <div className="row">
                                    {/* GAME DESCRIPTION */}
                                    <div className="card" style={{ background: "#000000", borderRadius: "15px" }}>
                                        <div className="card-body " style={{ background: "#222", borderRadius: "15px" }}>
                                            <div className='col-lg-8' >
                                                <h5 className="card-title" style={{ color: 'rgb(255 142 40)', fontSize: '20px', fontWeight: 'bolder' }}>DESCRIPTION</h5>

                                                <p className="card-text" style={{ color: "#fff" }}>
                                                    {/* <Replacer data={GameDescription} /> */}
                                                    {GameDescription}
                                                </p>
                                                <br />
                                                <h5 className="card-title" style={{ color: 'rgb(255 142 40)', fontSize: '20px', fontWeight: 'bolder' }}>INSTRUCTIONS</h5>

                                                <p className="card-text" style={{ color: "#fff" }}>
                                                    {/* <Replacer data={GameInstruction} /> */}
                                                    {GameInstruction}

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <br />
                                <div className='card default-form contact-form' style={{ backgroundColor: "black", borderRadius: "20px" }}>
                                    <div className='card-body'>
                                        <div className="row">
                                            {/* datatable */}
                                            <div class="col-12">
                                                <div className='row' >

                                                    <div className="form-group col-4">
                                                        <select className="form-control" id="contest" onChange={() => { datatablecall() }} required>
                                                            <option value="" selected disabled>Select Contest</option>

                                                            {/* <option value="prefer_not_to_say">Prefer not to say</option> */}
                                                        </select>
                                                    </div>
                                                    <div className='col-4' style={{ textAlign: 'center' }}>
                                                        <h3>LEADERBOARD</h3>
                                                    </div>
                                                    <div className='col-4' >
                                                        <div className='row'>
                                                            <div className='col-5' style={{ textAlign: 'right' }}>
                                                                <p>Ends in:</p>
                                                            </div>
                                                            <div className='col-5' style={{ textAlign: 'left' }}>
                                                                <p id="timer"> 00:00:00:00</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <table id="users" class="table table-striped table-dark" cellspacing="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th width="10%">#RANK</th>
                                                            <th width="30%">PLAYER NAME</th>
                                                            <th width="10%">POINTS</th>
                                                            <th width="10%">REWARD</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                                <div className='col-12'>
                                                    {/* <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#Rank</th>
                                <th scope="col">Player Name</th>
                                <th scope="col">Games Played</th>
                                <th scope="col">Total Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>20</td>
                                <td>5300</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table> */}
                                                </div>
                                            </div>
                                            {/* {getRandomGames(GameData, 12, 'col-lg-4 col-sm-3 col-6', GameInfo)} */}
                                        </div>
                                    </div>
                                </div>
                                {/* MORE GAMES SECTION */}
                                <div className="col-lg-12">

                                    <br />
                                    <div className="row">

                                        {/* {getRandomGames(gamedata, 12, 'col-lg-2 col-xs-6')} */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-xs-12">
                            <div className="col-lg-12">
                                <div className="row">
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>

            </div >
        </>
    )
    // }
}

// function getRandomGames(gamedata, total, size = 'col-lg-2 col-xs-5', current_playing_game) {
//     console.log(current_playing_game);
//     const shuffled = [...gamedata].sort(() => 0.5 - Math.random());
//     let randomgames = shuffled.slice(0, total);
//     console.log(randomgames.indexOf(current_playing_game), randomgames.length)//randomgames.splice(randomgames.indexOf(current_playing_game)),
//     return randomgames.map((key, index) => (
//         (key.game_id !== current_playing_game.game_id) ? (
//             <GameCards key={index} id={key.id} game_id={key.game_id} cardSize={size} imgUrl={"../" + key.thumbnail_image} vidUrl={"../" + key.thumbnail_video} alt={key.title} />) : ''
//     ));
// }