import React, { useState } from 'react'
import './Login.css'


import img from '../../assest/logo-mini.svg'

import { TiUserAddOutline } from "react-icons/ti";
import { MdLockOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Slider from '../../components/LoginSWiper/LoginSWiper';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }


  const navigate = useNavigate()

  return (
    <>
      <div className='login'>
        <div className='login1'>
          <Slider/>
        </div>
        <div className='login2'>
          <div className='login3'>
            <div className='login4'>
              <img src={img} alt="" />
              <h6>SocialV</h6>
            </div>
            <div className='login5'>
              <p>Welcome to socialV, a platform to connect with <br/> 
              the social world</p>
            </div>
            <div className='login6'>
              <div className='login7'>
                <label htmlFor="">Username or Email Address</label>
                <div className='login8'>
                  <TiUserAddOutline color='#6f7f92' size={20} />
                  <input type="text" />
                </div>
              </div>
              <div className='login7'>
                <label htmlFor="">Your Password</label>
                <div className='login8'>
                  <MdLockOutline color='#6f7f92' size={20} />
                  <input type={showPassword ? "text" : "password"} />
                  {showPassword ? (
                    <FaRegEye onClick={togglePassword} color='#6f7f92' size={15} style={{cursor:'pointer'}}/>
                  ) : (
                    <FaRegEyeSlash onClick={togglePassword} color='#6f7f92' size={15} style={{cursor:'pointer'}}/>
                  )}
                </div>

              </div>
              <div className='login9'>
                <div className='login10'>
                  <input type="checkbox" />
                  <label htmlFor=""> Remember Me</label>
                </div>
                <div className='login10'>
                  <p>Forgot Password?</p>
                </div>
              </div>
              <div className='login11'>
                <button onClick={()=>navigate('/home')}>SIGN IN</button>
              </div>
            </div>
            <div className='login12'>
              <h5>Don't have an account?<span>Sign Up</span></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login