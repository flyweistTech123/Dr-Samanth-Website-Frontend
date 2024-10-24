import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import img from '../../assest/img28.webp'

const FourthComponent = () => {
    return (
        <>
            <div className='fhome1'>
                <div className='fhome2'>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3000, // Set the delay in milliseconds
                            disableOnInteraction: false, // Continue autoplay after user interaction
                        }}
                        pagination={{ clickable: true }}
                    >
                        {/* First Slide */}
                        <SwiperSlide className="swiper-slide-custom">
                            <div className="fhome3 blur-slide">
                                <p>
                                    “ aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                                    <span className="highlight"> non recusandae. Itaque earum rerum </span>
                                    hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus. “
                                </p>
                                <div className="profile-item">
                                    <img src={img} alt="Denver Mark" />
                                    <h4>Denver Mark</h4>
                                    <p>Digital Marketing Manager - IQONIC DESIGN</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Second Slide */}
                        <SwiperSlide className="swiper-slide-custom">
                            <div className="fhome3">
                                <p>
                                    “ aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                                    <span className="highlight"> non recusandae. Itaque earum rerum </span>
                                    hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus. “
                                </p>
                                <div className="profile-item">
                                    <img src={img} alt="Kathryn Murphy" />
                                    <h4>Kathryn Murphy</h4>
                                    <p>Creative Manager - IQONIC DESIGN</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Third Slide */}
                        <SwiperSlide className="swiper-slide-custom">
                            <div className="fhome3 blur-slide">
                                <p>
                                    “ aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                                    <span className="highlight"> non recusandae. Itaque earum rerum </span>
                                    hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus. “
                                </p>
                                <div className="profile-item">
                                    <img src={img} alt="Ralph Edwards" />
                                    <h4>Ralph Edwards</h4>
                                    <p>Development Manager - IQONIC DESIGN</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FourthComponent