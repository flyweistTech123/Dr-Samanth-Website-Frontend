import React from 'react'
import PagesLayout from '../../components/CommonComponent/PagesLayout'
import './AboutUs.css'
import MyNavbar from '../../components/Navbar/Navbar'
import AboutUsFirstComponent from './AboutUsFirstComponent'
import Features from './Features'
import ArticleHome from '../Home/ArticleHome'
import Footer from '../../components/Footer/Footer'
import FourthComponent from '../Home/FourthComponent'

const AboutUs = () => {
    return (
        <>
            <MyNavbar />
            <div className='aboutus'>
                <PagesLayout name={"About Us"}/>
            </div>
            <div className='aboutus1'>
                <AboutUsFirstComponent />
                <Features />
                {/* <FourthComponent /> */}
                <ArticleHome/>
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs