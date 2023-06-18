import React from 'react'
import bg1 from '../assets/f-icon1.webp'
import bg2 from '../assets/f-icon3.webp'
import bg3 from '../assets/f-icon4.webp'
import bg4 from '../assets/f-icon5.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Types = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration in milliseconds
          offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
          easing: 'ease-in-out', // Easing function for animations
          once: true // Whether to only animate elements once
        });
      
      }, []);
    const arr=[
        {
            img:bg1,
            name:"Added Slider Revolution"

        },
        {
            img:bg2,
            name:"Elementor Page builder"
        },{
            img:bg3,
            name:'Extra care of Elite Author'
        },
        {
            img:bg4,
            name:"Woocommerce Ready"
        }
    ]
  return (
    <React.Fragment>
        <div className='typeCheck' id='Elements'>
        
        {arr.map((val,index)=>{
            return(
                <div className='data' key={index} >
            <img src={val.img} alt='' key={index} />
            <div className='name' data-aos="fade-right">{val.name}</div>
        </div>
            )
        })}
       
      
        </div>
    </React.Fragment>
  )
}

export default Types