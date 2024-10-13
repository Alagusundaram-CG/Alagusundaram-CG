import React, { useEffect } from 'react'
// import Header from '../components/header'
import Banner from '../components/home/banner';
// import MeetOurTeam from '../components/home/meet_our_team';
import GameTrailers from '../components/home/game_trailers';
import OurGames from '../components/home/games';
// import Facts from '../components/home/facts';
// import BlogList from '../components/home/blog_list';
import Clients from '../components/home/clients';
// import Footer from '../components/footer';
const Home = () => {
    useEffect(() => {
        document.title = "Home - ChennaiGames";
        // Get the screen width and height
        // const screenWidth = window.screen.width;
        // const screenHeight = window.screen.height;

        //alert(screenWidth,screenHeight);
        // Log the width and height to the console
        // console.log('Screen Width: ' + screenWidth + ' pixels');
        // console.log('Screen Height: ' + screenHeight + ' pixels');
    }, []);
    return (
        <>
            <Banner />
            <OurGames />
            <GameTrailers />
            <Clients />
        </>
    )
}

export default Home