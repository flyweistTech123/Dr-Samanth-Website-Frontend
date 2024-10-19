import React from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import './Home.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className='mainhome'>
        <FirstComponent />
        <SecondComponent />
      </div>
    </>
  )
}

export default Home