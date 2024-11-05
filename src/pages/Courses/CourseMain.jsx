import React from 'react'
import LeftSideCourse from './LeftSideCourse'
import RightSideCourse from './RightSideCourse'

const CourseMain = () => {
    return (
        <>
            <div className='coursemain'>
                <div className='coursemain1'>
                    <LeftSideCourse/>
                </div>
                <div className='coursemain2'>
                    <RightSideCourse/>
                </div>
            </div>
        </>
    )
}

export default CourseMain