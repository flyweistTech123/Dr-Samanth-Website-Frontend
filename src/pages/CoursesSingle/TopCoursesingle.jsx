import React from 'react'

import { IoIosArrowForward } from "react-icons/io";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const TopCoursesingle = () => {
  const navigate = useNavigate();



  return (
    <>
      <div className='topcoursesingle'>
        <div className='topcoursesingle1'>
          <div className='topcoursesingle2'>
            <div className='topcoursesingle3'>
              <nav>
                <ol>
                  <li>
                    <a href="/activity">Home</a>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <a href="/courses">Course</a>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Healthy Cooking Fundamentals
                  </li>
                </ol>
              </nav>
            </div>
            <h1>Healthy Cooking Fundamentals</h1>
            <div className='topcoursesingle4'>
              <div className='topcoursesingle5'>
                <div className='topcoursesingle6'>
                  <div className='topcoursesingle7'>
                    <img fetchpriority="high" alt="User Avatar" class="avatar" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/1/1696595070-bpfull.jpg" height="250" width="250" />
                  </div>
                  <div className='topcoursesingle8'>
                    <label htmlFor="">Created By</label>
                    <div className='topcoursesingle9'>
                      <h6>Jenny Wilson</h6>
                      <RiVerifiedBadgeFill color='#3897F0' />
                    </div>
                  </div>
                </div>
                <div className='topcoursesingle6'>
                  <div className='topcoursesingle8'>
                    <label htmlFor="">Backend</label>
                    <div className='topcoursesingle9'>
                      <h6>Health & Fitness</h6>
                    </div>
                  </div>
                </div>
                <div className='topcoursesingle6'>
                  <div className='topcoursesingle8'>
                    <label htmlFor="">Review</label>
                    <div className='topcoursesingle10'>
                      <span>4.5</span>
                      <div className="topcoursesingle11" title="4 out of 5 stars">
                        <div className="review-star">
                          <TiStarFullOutline className='far' />
                        </div>
                        <div className="review-star">
                          <TiStarFullOutline className='far' />
                        </div>
                        <div className="review-star">
                          <TiStarFullOutline className='far' />
                        </div>
                        <div className="review-star">
                          <TiStarFullOutline className='far' />
                        </div>
                        <div className="review-star">
                          <TiStarOutline className='far' />
                        </div>
                      </div>
                      <span>(<span>2</span> ratings)</span>
                    </div>
                  </div>
                </div>
                <div className='topcoursesingle6'>
                  <div className='topcoursesingle8'>
                    <label htmlFor="">Course Results: 0%</label>
                    <div className='topcoursesingle12'>
                      <div className='topcoursesingle13'>
                        <div className='topcoursesingle14'>

                        </div>
                      </div>
                      <div className='topcoursesingle15'>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopCoursesingle