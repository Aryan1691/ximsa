import React from 'react'
import bg1 from '../assets/f-icon6.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SmallInfo = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-out', // Easing function for animations
      once: true // Whether to only animate elements once
    });
  
  }, []);
  return (
  <React.Fragment>
  <div className='infoField'>

<div className='firstPart'>
    <button className='free' data-aos="fade-right">Free</button>
    <div className='title1' data-aos="fade-right" >Slider Revolution</div>
    <hr  data-aos="fade-right"/>
    <div className='title2' data-aos="fade-right"><span className='xim'>Ximsa </span>will save your <span className='amount'>$85.00</span> </div>
</div>
<div className='title3' data-aos="fade-top">Slider Revolution is more than just a WordPress slider. It helps beginner-and mid-level designers WOW their clients with pro-level visuals.</div>
<img src={bg1} data-aos="fade-left" className='imgofthedata' alt="" />
  </div>

  </React.Fragment>
  )
}

export default SmallInfo