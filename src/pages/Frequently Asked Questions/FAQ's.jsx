import React from 'react'
import PagesLayout from '../../components/CommonComponent/PagesLayout'
import './FAQ.css'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MainComponent from './MainComponent'

const FAQ = () => {
    return (
        <>
            <MyNavbar />
            <div className='aboutus'>
                <PagesLayout name={"frequently asked questions"}/>
            </div>
            <div className='privacy-policy'>
                <MainComponent/>
            </div>
            <Footer/>
        </>
    )
}

export default FAQ