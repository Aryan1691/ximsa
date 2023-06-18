import React from 'react'
import Author from '../assets/author.webp';
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
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
 <div className='footer'>
    <img className='authimg' src={Author} alt=""  data-aos="fade-top"/>
    <div className='authtext' data-aos="fade-left" >Download Ximsa WordPress Now!</div>
    <div className='authtotken'  data-aos="fade-right">A single license includes free lifetime updates!</div>
    <button className='but' >Buy for only $29</button>
 </div>
 <div className='footer2'>
 <div className='foot' data-aos="fade-left" >Designed with <span style={{color:"red"}}>Love</span>   by themexriver</div>
 <div data-aos="fade-top">
 <span><BsFacebook/></span>
 <span><BsTwitter/></span>
 <span><BsInstagram/></span>
 </div>
 <div className='foot' data-aos="fade-right">© 2022 Ximsa All rights reserved</div>
 </div>
 </React.Fragment>
  )
}

export default Footer