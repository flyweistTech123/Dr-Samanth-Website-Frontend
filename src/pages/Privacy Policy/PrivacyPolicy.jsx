import React from 'react'
import PagesLayout from '../../components/CommonComponent/PagesLayout'
import './PrivacyPolicy.css'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MainComponent from './MainComponent'

const PrivacyPolicy = () => {
    return (
        <>
            <MyNavbar />
            <div className='aboutus'>
                <PagesLayout name={"Privacy Policy"} />
            </div>
            <div className='privacy-policy'>
                <MainComponent/>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy