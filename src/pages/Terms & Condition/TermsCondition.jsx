import React from 'react'
import PagesLayout from '../../components/CommonComponent/PagesLayout'
import './TermsCondition.css'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TermsConditionMain from './TermsConditionMain'

const TermsCondition = () => {
    return (
        <>
            <MyNavbar />
            <div className='aboutus'>
                <PagesLayout name={"Terms & Condition"} />
            </div>
            <div className='privacy-policy'>
                <TermsConditionMain />
            </div>
            <Footer />
        </>
    )
}

export default TermsCondition