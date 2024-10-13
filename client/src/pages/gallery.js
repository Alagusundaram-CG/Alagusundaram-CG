import React,{useEffect} from 'react'
import HeroBanner from '../components/gallery/herobanner'
import GalleryCard from '../components/gallery/gallerycard'
const Gallery = () => {
    useEffect(() => {
        document.title = "Gallery - ChennaiGames";
      }, []);
    return (
       <>
        <HeroBanner/>
        <GalleryCard/>
       </>
    )
}

export default Gallery