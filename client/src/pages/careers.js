import React,{useEffect} from 'react'
import HeroBanner from '../components/careers/herobanner'
import CurrentOpenings from '../components/careers/openings_list'
import CareersInfo from '../components/careers/description'
const Careers = () => {
    useEffect(() => {
        document.title = "Careers - ChennaiGames";
      }, []);
    return (
       <>
        <HeroBanner/>
        <CareersInfo/>
        <CurrentOpenings/>
       </>
    )
}

export default Careers