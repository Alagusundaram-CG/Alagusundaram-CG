import React,{useEffect} from 'react'
import HeroBanner from '../components/contactus/herobanner';
import ContactUsForm from '../components/contactus/form';
import MapSection from '../components/contactus/map';
const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us - ChennaiGames";
      }, []);
    return (
       <>
        <HeroBanner/>
        <ContactUsForm/>
        <MapSection/>
       </>
    )
}

export default ContactUs