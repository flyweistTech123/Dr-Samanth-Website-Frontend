import React from 'react'

import { IoCloseSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";


const RightCoursesingle = () => {
    return (
        <>
            <aside className='rightcoursesingle'>
                <div className='rightcoursesingle1'>
                    <div className='rightcoursesingle2'>
                        <div class="media-preview">
                            <img width="500" height="300" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/1-500x300.jpg" class="attachment-500x300 size-500x300 wp-post-image" alt="Healthy Cooking Fundamentals" title="Healthy Cooking Fundamentals" />
                        </div>
                        <div className='rightcoursesingle3'>
                            <div className='rightcoursesingle4'>
                                <IoCloseSharp />
                                <span>Failed</span>
                            </div>
                            <div className='rightcoursesingle5'>
                                <span>Course is finished</span>
                            </div>
                        </div>
                        <div className='rightcoursesingle6'>
                            <h5>The Course Includes:</h5>
                            <ul>
                                <li>
                                    <FaBookOpen />
                                    <span className="value">2 Detailed Lessons</span>
                                </li>
                                <li>
                                    <FaPuzzlePiece  />
                                    <span className="value">Quizzes after 1</span>
                                </li>
                                <li>
                                    <FaCalendarDays  />
                                    <span className="value">15 weeks Of The Entire Course</span>
                                </li>
                                <li>
                                    <FaUserGraduate  />
                                    <span className="value">26 Students participated</span>
                                </li>
                                <li>
                                    <IoIosCheckbox  />
                                    <span className="value">Assessments Self</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default RightCoursesingle