import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file for styling

const slides = [
  {
    id: 1,
    image: '/assets/slider_image1.jpg', // Replace with your image paths
    title: 'Welcome to Our Anime App!',
    description: 'Discover and explore a vast collection of anime titles.',
  },
  {
    id: 2,
    image: '/assets/slider_image3.jpg',
    title: 'Get Personalized Recommendations!',
    description: 'Find the perfect anime for your taste.',
  },
  {
    id: 3,
    image: '/assets/slider_image4.jpg',
    title: 'Join Our Community!',
    description: 'Share your favorite anime with others.',
  },
  {
    id: 4,
    image: '/assets/slider_image2.jpg',
    title: 'Content Based Recommendation',
    description: 'AnimeVec',
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Clear interval on unmount
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
