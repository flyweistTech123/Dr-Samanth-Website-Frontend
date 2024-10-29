import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './LoginSWiper.css';

import img from '../../assest/image-2-scaled.jpg'
import img1 from '../../assest/img31.jpg'
import img2 from '../../assest/img32.png'

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider-background">
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    <div className="carousel-item">
                        <img src={img2} alt="Friendship" />
                        <div className="carousel-caption">
                            <h2>Power UP Your Friendship</h2>
                            <p>It is a long established fact that a reader will<br /> be distracted by the readable content.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} alt="Friendship" />
                        <div className="carousel-caption">
                            <h2>Connect with the world</h2>
                            <p>It is a long established fact that a reader will <br />be distracted by the readable content.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="Friendship" />
                        <div className="carousel-caption">
                            <h2>Together Is Better</h2>
                            <p>It is a long established fact that a reader will <br />be distracted by the readable content.</p>
                        </div>
                    </div>
                    {/* You can add more carousel items here */}
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;
