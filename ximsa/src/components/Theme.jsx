import React from 'react'
import theme1 from '../assets/theme1.webp';
import theme2 from '../assets/theme2.png';
import theme3 from '../assets/theme3.webp'
import theme4 from '../assets/theme4.webp'
import theme5 from '../assets/theme5.webp'
import theme6 from '../assets/theme6.webp'
import theme7 from '../assets/theme7.webp'
import theme8 from '../assets/theme8.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Theme = () => {
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
            name:"Slider Revolution",
            img: theme1
        },
        {
            name:"Elementor Header Footer Builder",
            img: theme2
        },
        {
            name:"Elementor Page Builder",
            img: theme3
        },
        {
            name:"Woocommerce Ready",
            img: theme4
        },
        {
            name:"Support WPML multilingual",
            img: theme5
        },
         {
            name:"Support Jetpack",
            img: theme6
        },
        {
            name:"Video Documentation",
            img: theme7
        }, {
            name:"Unlimited Colors Option",
            img: theme8
        }
    ]
  return (
    <React.Fragment>

        <div className="theme" id='Features'>
      <div className='name' data-aos="fade-left">
        Theme Features
      </div>
      <div className='themetitle' data-aos="fade-right">Buy Avarton & enjoy some exclusive features</div>
      <div className='form'>
      {arr.map((val,index)=>{
        return(
            <div key={index}>
            <div
           className='themcon'
            >        <img className='themeImage' data-aos="fade-top" src={val.img} alt="" />
  </div>
        <div className='texttheme' data-aos="fade-bottom">{val.name}</div>
        </div>
        )
      })}
      
      </div>
      
        </div>
    </React.Fragment>
  )
}

export default Theme