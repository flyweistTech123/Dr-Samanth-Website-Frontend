import React, { useState } from 'react'
import SearchCourse from './SearchCourse'
import { RiBookOpenFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import CoursePagination from './Pagination';


const LeftSideCourse = () => {
    const [layout, setLayout] = useState('grid'); // Default to grid layout

    const toggleLayout = (newLayout) => {
        setLayout(newLayout);
    };

    return (
        <>
            <div className='leftsidecourse'>
                <SearchCourse toggleLayout={toggleLayout} layout={layout} />
                <div className='leftsidecourse1'>
                    <ul className={`leftsidecourse2 ${layout === 'grid' ? 'grid' : 'list'}`} data-layout={layout}>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="">
                                            <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/1-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="" rel="tag">Health &amp; Fitness</a>	</div>
                                        <span className="course-instructor">
                                            By<a href=""> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="" className="course-permalink"></a>

                                    <h2 className="course-title">
                                        <a href="" className="course-permalink"></a><a href="" className="course-permalink">Healthy Cooking Fundamentals</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="	https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/2-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">cooking</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title"><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">The professional balancing of ice cream recipes</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="	https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/3-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">Health &amp; Fitness</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">Music Theory Comprehensive Complete!</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/4-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">Development</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title"><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">Python and Django Full Stack Web Developer Bootcamp</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/5-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">ux/ui</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title"><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">The Ultimate Guide to Usability and UX</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/09/6-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">Development</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">JavaScript: Understanding the Weird Parts</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/1-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">Health &amp; Fitness</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title"><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">Healthy Cooking Fundamentals</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="	https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/2-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">cooking</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title"><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a><a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">The professional balancing of ice cream recipes</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='course-box'>
                            <div className="course-item">
                                <div className="course-wrap-thumbnail">
                                    <div class="course-thumbnail">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/">
                                            <img src="	https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/2020/11/3-500x300.jpg" loading="lazy" class="rounded" alt="Healthy Cooking Fundamentals" />
                                        </a>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <div className="course-header">
                                        <div className="course-categories">
                                            <a href="https://wordpress.iqonic.design/product/wp/socialv/course-category/health-fitness/" rel="tag">Health &amp; Fitness</a>	</div>
                                        <span className="course-instructor">
                                            By<a href="https://wordpress.iqonic.design/product/wp/socialv/instructor/jenny/"> <span className="instructor-display-name">Jenny Wilson</span></a></span>
                                    </div>
                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>

                                    <h2 className="course-title">
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink"></a>
                                        <a href="https://wordpress.iqonic.design/product/wp/socialv/courses/healthy-cooking-fundamentals/" className="course-permalink">Music Theory Comprehensive Complete!</a></h2>
                                    <div className="course-meta">
                                        <div className="meta-item meta-item-lesson">
                                            <span className="meta-number">
                                                <RiBookOpenFill className="icon-lesson" /> 2 lessons
                                            </span>
                                        </div>
                                        <div className="meta-item meta-item-student">
                                            <span className="meta-number">
                                                <FaUserGraduate className="icon-lesson" />
                                                26 students
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-ratings">
                                        <span className="course-rating-total">4.5</span>
                                        <div className="review-stars-rated" title="4 out of 5 stars">
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
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <CoursePagination/>
                </div>
            </div>
        </>
    )
}

export default LeftSideCourse