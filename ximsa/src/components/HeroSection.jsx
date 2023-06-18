import React, { useEffect } from 'react';
import bg1 from '../assets/1.webp';
import bg2 from '../assets/2.webp';
import bg3 from '../assets/3.webp';
import bg4 from '../assets/4.webp';
import bg5 from '../assets/5.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");
      const postX = e.clientX;
      const postY = e.clientY;

      cursorDot.style.left = `${postX}px`;
      cursorOutline.style.top = `${postY}px`;
      cursorOutline.style.left = `${postX}px`;

      cursorOutline.style.top = `${postY}px`;

      cursorOutline.animate({
        left:`${postX}px`,
        top: `${postY}px`
      },{duration:500,fill: "forwards"})

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>

<div className="cursor-dot"
style={{backgroundColor:"red"}} data-cursor-dot></div>
      <div className="cursor-outline" style={{background:"  linear-gradient(30deg, #210dff, blue, #14ebff, rgb(255, 36, 189),rgb(255, 26, 182))"}} data-cursor-outline></div>
      <style>{`
      .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          background-color: rgb(200, 38, 38);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          transition: left 0.3s linear, top 0.3s linear;
        }

        .cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
       
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.3s ease-in-out; /* Add transition property */

        }
    .groupOfImages {
  /* Group of images styles */

  &:hover ~ .cursor-outline {
    transform: scale(10);
  }
}
      `}</style>
      <div className='groupOfImages'>
        <img src={bg1} alt="" data-aos="fade-up" className='img1' />
        <img src={bg2} alt="" data-aos="fade-left" className='img2' />
        <img src={bg3} alt="" data-aos="fade-left" className='img3' />
        <img src={bg4} alt="" data-aos="fade-right" className='img4' />
        <img src={bg5} alt="" data-aos="fade-right" className='img5' />
      </div>

      <div className='main'>
        <div className='color text1' data-aos="fade-up">2.4</div>
        <div className='color text2' data-aos="fade-bottom">
          Many Website, One Solution
        </div>
        <div className='text3' data-aos="fade-right">Multipurpose</div>
        <div className='text4' data-aos="fade-left">WordPress Theme</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className='button' data-aos="fade-left">
            <span>Stunning Demos</span>
          </button>
          <button className='button' data-aos="fade-right">
            <span>Theme Features</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
