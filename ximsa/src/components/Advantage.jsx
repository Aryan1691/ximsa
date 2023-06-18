import React from 'react';
import icon1 from '../assets/icons1.webp';
import icon2 from '../assets/icons2.webp';
import icon3 from '../assets/icons3.webp';
import icon4 from '../assets/icons4.webp';
const Advantage = () => {
    const arr =[
        {
            name:"One Click Install",
            img: icon1
        },
        {
            name:"No coding required",
            img: icon2
        },
        {
            name:"Easy to customize",
            img:icon3
        },
        {
            name:"Regular Update",
            img: icon4
        }
    ]
  return (
    <React.Fragment>
    
           <div className='Advantage'>
        
        {arr.map((val,index)=>{
            return(
                <div className='data1' key={index} >
            <img src={val.img} alt=''  />
            <div className='name1' data-aos="fade-right">{val.name}</div>
        </div>
            )
        })}
   
       
        </div>
      
 


    </React.Fragment>
  )
}

export default Advantage