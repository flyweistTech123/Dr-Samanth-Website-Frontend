import React from 'react'


import { RiSearchLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";


const SearchCourse = () => {
  return (
    <>
      <div className='searchcourse'>
        <div className='searchcourse1'>
          <div className='searchcourse2'>
            <h6>All Courses</h6>
          </div>
          <div className='searchcourse2'>
            <div className='searchcourse3'>
              <div className='searchcourse4'>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search courses..."
                />
                <div className='searchcourse5'>
                  <RiSearchLine color='white' size={25} />
                </div>
              </div>
              <div className='searchcourse6'>
                <div className='searchcourse7'>
                  <IoGridOutline />
                </div>
                <div className='searchcourse8'>
                  <VscSettings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchCourse