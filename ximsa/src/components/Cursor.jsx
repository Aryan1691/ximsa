import React, { useEffect } from 'react';

const Cursor = () => {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");
      const postX = e.clientX;
      const postY = e.clientY;

      cursorDot.style.left = `${postX}px`;
      cursorOutline.style.top = `${postY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default Cursor;
