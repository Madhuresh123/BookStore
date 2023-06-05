import React, { useState, useEffect } from 'react';
import './slideShow.css'; // Import your CSS file for styling

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3'
  ];

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  // Automatically move to next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="slideshow">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prevSlide}>&#8249;</button>
      <button className="arrow right" onClick={nextSlide}>&#8250;</button>
    </div>
  );
};

export default SlideShow;
