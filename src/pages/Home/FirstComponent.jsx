import React from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import './Home.css'


import img from '../../assest/img1.png'
import img1 from '../../assest/img2.png'
import img2 from '../../assest/img3.png'
import img3 from '../../assest/img4.png'
import img4 from '../../assest/img5.webp'
import img5 from '../../assest/img6.webp'
import img6 from '../../assest/img14.webp'
import img7 from '../../assest/img8.webp'
import img8 from '../../assest/img9.webp'
import img9 from '../../assest/img10.webp'
import img10 from '../../assest/img11.png'
import img11 from '../../assest/img12.png'
import img12 from '../../assest/img13.webp'

const FirstComponent = () => {
  return (
    <>
      <div className='home1'>
        <div className="hero-container">
          {/* Floating Images */}
          <img src={img3} alt="Character 1" loading="lazy" className="float-img img1" />
          <img src={img5} alt="Character 2" loading="lazy" className="float-img img2" />
          <img src={img7} alt="Character 3" loading="lazy" className="float-img img3" />
          <img src={img} alt="Character 4" loading="lazy" className="float-img img4" />
          <img src={img9} alt="Character 5" loading="lazy" className="float-img img5" />
          <img src={img10} alt="Character 5" loading="lazy" className="float-img img6" />
          <img src={img11} alt="Character 5" loading="lazy" className="float-img img7" />
          <img src={img9} alt="Character 5" loading="lazy" className="float-img img8" />
          <img src={img2} alt="Character 5" loading="lazy" className="float-img img9" />
          <img src={img8} alt="Character 5" loading="lazy" className="float-img img10" />
          <img src={img1} alt="Character 5" loading="lazy" className="float-img img11" />
          <img src={img4} alt="Character 5" loading="lazy" className="float-img img12" />
          <img src={img12} alt="Character 5" loading="lazy" className="float-img img13" />
          <img src={img6} alt="Character 5" loading="lazy" className="float-img img14" />
          <div className='home2'>
            <h1 className="main-heading">When Stories Meet Their <br />Perfect Audience</h1>
            <p className="sub-heading">
              Having real social contacts can sometimes be difficult.<br />
              FUN, everything becomes much simpler!
            </p>
            <button>EXPLORE NOW</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstComponent