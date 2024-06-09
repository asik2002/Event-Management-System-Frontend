import React from 'react'
import image from '../../../assets/hero.jpg'
import "./HeroSection.css"
const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='content-container'>
        <div className='content'>
        <h1 >Wanna see what your neighbours are upto?</h1>
        <p>Collaborate with people on events</p>
        <a className='hero-btn' href='#upcoming-events'>Explore events <span className="material-symbols-outlined">arrow_drop_down</span></a>
        </div>      
      </div> 
     <div className='image-div'>
       <img className='image'src={image}></img>
     </div>
    </div>
  )
}

export default HeroSection