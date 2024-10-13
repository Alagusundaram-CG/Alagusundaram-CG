import React,{useEffect} from 'react'
import HeroBanner from '../components/about/herobanner'
import AboutContent from '../components/about/about_content'
import Clients from '../components/home/clients'
const About = () => {
    useEffect(() => {
        document.title = "About Us - ChennaiGames";
      }, []);
    return (
       <>
        <HeroBanner/>
        <AboutContent/>
        <Clients/>
       </>
    )
}

export default About