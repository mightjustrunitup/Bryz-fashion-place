import React from 'react';
import './Hero.css';
import heroImage from '../../assets/african_editorial_hero.png';

const Hero = () => {
    return (
        <div className="hero">
            {/* 
        In a real scenario, this would be your high-fashion rendered images.
        For now, using a placeholder that mimics the green/nature aesthetic of Rendoll.
      */}

            <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}></div>

            {/* 
        The Rendoll hero is actually quite clean. 
        Usually just an image, but we can add an optional overlay if needed later.
      */}
        </div>
    );
};

export default Hero;
