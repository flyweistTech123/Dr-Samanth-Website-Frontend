import React from 'react'
import PagesLayout from '../../components/CommonComponent/PagesLayout'
import './ContactUs.css'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

const ContactUs = () => {
    return (
        <>
            <MyNavbar />
            <div className='aboutus'>
                <PagesLayout name={"Contact Us"} />
            </div>
            <div className='privacy-policy'>
                <ContactForm />
                <ContactMap/>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs