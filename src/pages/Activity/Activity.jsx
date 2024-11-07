import React from 'react'
import HOC from '../../components/HOC/HOC';

import './Activity.css'
import Stories from './Story';
import MainSection from './MainSection';
import RightSideSection from './RightSideSection';

const Activity = () => {
  return (
    <>
      <div className='activity'>
        <Stories />
        <div className='activity1'>
          <div>
            <MainSection />
          </div>
          <div>
            <RightSideSection />
          </div>
        </div>

      </div>
    </>
  )
}

export default HOC(Activity);