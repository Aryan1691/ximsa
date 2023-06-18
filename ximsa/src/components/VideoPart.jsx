import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const VideoPart = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-out', // Easing function for animations
      once: true // Whether to only animate elements once
    });
  
  }, []);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const showVideo = () => {
    setIsVideoVisible(true);
  };

  const hideVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <div className="VideoPart">
      <div className="name" data-aos="fade-up">Short Video Tutorial</div>
      <div className="videotitle" data-aos="fade-bottom">Video will help you learn much better!</div>
      <button className="but" style={{color:"white"}}>One Click Demo Install</button>
      <div className="thumbnail" data-aos="fade-left" onClick={showVideo}>
        {!isVideoVisible && (
          <div className="thumbnail-overlay">
            <div className="play-icon"></div>
          </div>
        )}
        <img
          src="https://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/video.png"
          alt="Video Thumbnail"
        />
      </div>
      {isVideoVisible && (
        <div className="video-modal" onClick={hideVideo}>
          <div className="modal-content">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/oR9HWTAZ0fI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPart;
