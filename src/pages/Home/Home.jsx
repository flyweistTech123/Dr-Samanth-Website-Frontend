import React from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import './Home.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import FivthComponent from './FivthComponent'
import ArticleHome from './ArticleHome'
import SubscribeNewsletter from './SubscribeNewsletter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className='mainhome'>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FivthComponent />
        <ArticleHome />
        <SubscribeNewsletter/>
      </div>
      <Footer/>
    </>
  )
}

export default Home