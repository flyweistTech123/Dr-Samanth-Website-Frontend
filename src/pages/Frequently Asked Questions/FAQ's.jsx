import React from 'react'
import PagesLayout from '../../components/CommonComponent/PagesLayout'
import './FAQ.css'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const FAQ = () => {
    return (
        <>
            <MyNavbar />
            <div className='aboutus'>
                <PagesLayout name={"frequently asked questions"}/>
            </div>
            <Footer/>
        </>
    )
}

export default FAQ