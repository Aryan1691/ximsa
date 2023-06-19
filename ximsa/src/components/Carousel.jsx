import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import car1 from '../assets/car1.webp';
import car2 from '../assets/car2.webp';
import car3 from '../assets/car3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel1 = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-out', // Easing function for animations
      once: true // Whether to only animate elements once
    });
  
  }, []);
  const renderArrowPrev = (onClickHandler, hasPrev, label) => {
    return (
      hasPrev && (
        <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
          <FaChevronLeft size={50}  color='white'
           style={{backgroundColor:"blue",
           padding:"10px",
           borderRadius:"50%"}} />
        </button>
      )
    );
  };

  const renderArrowNext = (onClickHandler, hasNext, label) => {
    return (
      hasNext && (
        <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
          <FaChevronRight size={50} color='white'
           style={{backgroundColor:"blue",
           padding:"10px",
           borderRadius:"50%"}}/>
        </button>
      )
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-text" data-aos="fade-right">
        <div className='name'
        style={{
          paddingBottom:"10px"
        }}>Inner Pages</div>
        <br />
        <div className='ProjectTitle'>Essential Inner & Blog pages</div>
      </div>
      <Carousel
        className="car"
        centerMode
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showStatus={false}
        showThumbs={false}
        centerSlidePercentage={70}
        renderIndicator={() => null}
      
      >
        <div style={{ padding: '20px' }}   data-aos="fade-left">
          <img className="carimg" src={car1} alt="Image1" />
        </div>
        <div style={{ padding: '20px' }}   data-aos="fade-left">
          <img className="carimg" src={car2} alt="Image2" />
        </div>
        <div style={{ padding: '20px' }}   data-aos="fade-left">
          <img className="carimg" src={car3} alt="Image3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel1;
