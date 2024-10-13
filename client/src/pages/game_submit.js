import React, { useEffect } from 'react'
import HeroBanner from '../components/game_submission/herobanner'
// import Request_form from '../components/game_submission/form'
import AboutContent from '../components/about/about_content'
import Clients from '../components/home/clients'
import RequestForm from '../components/game_submission/form'
const Game_submit = () => {
    return (
        <>
            <HeroBanner />
            <RequestForm />
            {/* <AboutContent /> */}
            {/* <Clients /> */}
        </>
    )
}

export default Game_submit