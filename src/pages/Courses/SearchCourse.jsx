import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import { IoGridOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const SearchCourse = ({ toggleLayout, layout }) => {
  return (
    <div className='searchcourse'>
      <div className='searchcourse1'>
        <div className='searchcourse2'>
          <h6>All Courses</h6>
        </div>
        <div className='searchcourse288'>
          <div className='searchcourse3'>
            <div className='searchcourse4'>
              <input type="search" placeholder="Search courses..." />
              <div className='searchcourse5'>
                <RiSearchLine color='white' size={20} />
              </div>
            </div>
            <div className='searchcourse6'>
              <div
                className={`search-toggle ${layout === 'grid' ? 'active' : ''}`}
                onClick={() => toggleLayout('grid')}
              >
                <IoGridOutline />
              </div>
              <div
                className={`search-toggle ${layout === 'list' ? 'active' : ''}`}
                onClick={() => toggleLayout('list')}
              >
                <VscSettings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
