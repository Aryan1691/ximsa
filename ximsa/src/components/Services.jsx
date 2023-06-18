import React from 'react'
import ser1 from '../assets/service.webp'
import ser2 from '../assets/service2.webp'
import ser3 from '../assets/service3.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-out', // Easing function for animations
      once: true // Whether to only animate elements once
    });
  
  }, []);
  const arr =[
    {
      img: ser1,
      title: "How Can We Help You?",
      title2: "Open a ticket for Support"
    },
    {
      img: ser2,
      title: "Detailed Documentation",
      title2: "Online Documentation"
    },
    {
      img: ser3,
      title: "Looking for customization?",
      title2: "Describe Your Project"
    }
  ]
  return (
   <React.Fragment>
    <div className='services'>
        {arr.map((val,index)=>{
          return(
            <div className='serbox' key={index}>
              <img className='serImg' src={val.img} data-aos="fade-top" alt="img"  />
              <div className='serTitle' data-aos="fade-left">{val.title}</div>
              <div className='serTitle2' data-aos="fade-right">{val.title2}</div>
            </div>
          )
        })}
    </div>
   </React.Fragment>
  )
}

export default Services