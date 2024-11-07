import React from 'react'
import HOC from '../../components/HOC/HOC'
import TopCoursesingle from './TopCoursesingle'

import './CoursesSingle.css'
import LeftCoursesingle from './LeftCoursesingle'
import RightCoursesingle from './RightCoursesingle'

const CoursesSingle = () => {
    return (
        <>
            <div className='coursesingle'>
                <TopCoursesingle />
                <div className='coursesingle1'>
                    <div className='leftcoursesingle'>
                        <LeftCoursesingle />
                    </div>Members
                    <div className='coursesingle2'>
                        <RightCoursesingle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CoursesSingle)