import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './LoginSWiper.css';

import img from '../../assest/image-2-scaled.jpg'

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
                        <img src={img} alt="Friendship" />
                        <div className="carousel-caption">
                            <h2>Power UP Your Friendship</h2>
                            <p>It is a long established fact that a reader will<br /> be distracted by the readable content.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img} alt="Friendship" />
                        <div className="carousel-caption">
                            <h2>Power UP Your Friendship</h2>
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
