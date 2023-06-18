import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { AiOutlineArrowRight } from 'react-icons/ai';
import bg from '../assets/logo2.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-out', // Easing function for animations
      once: true // Whether to only animate elements once
    });
  
  }, []);
  const [color, setColor] = useState('rgb(244, 244, 244)');
  const [main, setMain] = useState('black');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;

      if (scrollPosition > threshold) {
        setColor('white');
        setMain('black');
      } else {
        setColor('rgb(244, 244, 244)');
        setMain('black');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`container ${isMobile ? 'mobile' : ''}`} style={{ backgroundColor: color }}>
        <img src={bg} className='logo' alt=""  data-aos="fade-left"/>
        {!isMobile ? (
          <>
            <div className="nav"  data-aos="fade-top">
              <a href="#Demos" style={{ color: main }}>
                Demos
              </a>
              <a href="#Elements" style={{ color: main }}>
                Elements
              </a>
              <a href="#Features" style={{ color: main }}>
                Features
              </a>
              <a href="#Support" style={{ color: main }}>
                Support
              </a>
              <a href="#Documentation" style={{ color: main }}>
                Documentation
              </a>
            </div>
            <button className='but'>
              Purchase Now <AiOutlineArrowRight style={{ fontSize: "1.2em", fontWeight: "bolder", position: "relative", top: "5px" }} />
            </button>
          </>
        ) : (
          <>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <div className={`bar ${isOpen ? 'active' : ''}`}></div>
              <div className={`bar ${isOpen ? 'active' : ''}`}></div>
              <div className={`bar ${isOpen ? 'active' : ''}`}></div>
            </div>
            <button className='but'>Purchase Now</button>
          </>
        )}
        {isMobile && isOpen && (
          <div className="sidebar">
            <nav className="sidebar-nav">
              <img src={bg} className='logo' alt="" />
              <ImCross
                style={{
                  paddingLeft: "30px",
                  paddingBottom: "15px"
                }}
                onClick={toggleSidebar}
              />
              <a href="#Demos" onClick={toggleSidebar}>
                Demos
              </a>
              <a href="#Elements" onClick={toggleSidebar}>
                Elements
              </a>
              <a href="#Features" onClick={toggleSidebar}>
                Features
              </a>
              <a href="#Support" onClick={toggleSidebar}>
                Support
              </a>
              <a href="#Documentation" onClick={toggleSidebar}>
                Documentation
              </a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
