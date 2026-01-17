import React from 'react';
import './AboutUs.css';
import aboutImage from '../../assets/about_us.png';

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="about-title">Our Story</h2>
                    <p className="about-text">
                        Welcome to Bryz Fashion Place, where luxury meets culture. We believe in creating
                        timeless pieces that celebrate the beauty of African heritage with a modern, high-fashion
                        twist. Each garment is crafted with precision, passion, and the finest materials
                        to ensure you feel confident and elegant in every piece.
                    </p>
                    <p className="about-text">
                        From our humble beginnings to becoming a destination for bold, sophisticated
                        fashion, our journey has always been about more than just clothes. It's about
                        expression, tradition, and the art of modern dressing.
                    </p>
                    <button className="btn-about">Discover More</button>
                </div>
                <div className="about-image-wrapper">
                    <img src={aboutImage} alt="Bryz Fashion Studio" className="about-image" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
