import React from 'react'
// import SlideShow from '../component/SlideShow'
import Header from "../component/Header";
import CategorySlide from '../component/CategorySlide';
import Carousel from '../component/Carousel';


function LandingPage() {
  return (
    <div style={{backgroundColor:'whitesmoke'}}>
        <Header/>
        {/* <SlideShow/> */}
        <Carousel/>
        <CategorySlide category='General'/>
        <CategorySlide category='Novel'/>
        <CategorySlide category='Self-improvement'/>
        <CategorySlide category='Frictional'/>

    </div>
  )
}

export default LandingPage