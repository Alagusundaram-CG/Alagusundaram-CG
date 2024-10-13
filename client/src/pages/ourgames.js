import React,{useEffect} from 'react'
import HeroBanner from '../components/ourgames/herobanner'
import OurGamesList from '../components/ourgames/games'
const OurGames = () => {
    useEffect(() => {
        document.title = "Our Games - ChennaiGames";
      }, []);
    return (
       <>
        <HeroBanner/>
        <OurGamesList/>
       </>
    )
}

export default OurGames