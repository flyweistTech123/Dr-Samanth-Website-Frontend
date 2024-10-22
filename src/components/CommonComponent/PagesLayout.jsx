import React from 'react'
import './Commoncss.css'
import { IoIosArrowForward } from "react-icons/io";


const PagesLayout = () => {
  return (
    <>
      <div className='pageLayout1'>
        <div className='pageLayout2'>
          <h2>About Us</h2>
          <div className='pageLayout3'>
            <span>Home</span>
            <IoIosArrowForward color='white'/>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PagesLayout