import React from 'react'
import './Courses.css'
import HOC from '../../components/HOC/HOC'
import SearchCourse from './SearchCourse'
import CourseMain from './CourseMain'

const Courses = () => {
    return (
        <>

            <div className='activity'>
                <CourseMain />
            </div>
        </>
    )
}

export default HOC(Courses)
