import React from 'react'


import { CiWallet } from "react-icons/ci";

import img from '../../assest/img24.webp'
import img1 from '../../assest/img25.webp'
import img2 from '../../assest/img26.png'

const AboutUsFirstComponent = () => {
    return (
        <>
            <div className='aboutusF'>
                <div className='aboutusF1'>
                    <div className='aboutusF2'>
                        <div className='aboutusF3'>
                            <h3>We Improve Your Experience Day by Day with Psykode</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly</p>
                        </div>
                        <div className='aboutusF4'>
                            <div className='aboutusF5'>
                                <div className='aboutusF6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none"><path d="M26.8526 16.1943H21.4548C19.4729 16.1931 17.8664 14.5879 17.8652 12.606C17.8652 10.624 19.4729 9.01882 21.4548 9.01761H26.8526" stroke="#6F7F92" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.0654 12.5238H21.6498" stroke="#6F7F92" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.33087 1H19.8554C23.7196 1 26.8523 4.13268 26.8523 7.99689V17.5663C26.8523 21.4305 23.7196 24.5631 19.8554 24.5631H8.33087C4.46666 24.5631 1.33398 21.4305 1.33398 17.5663V7.99689C1.33398 4.13268 4.46666 1 8.33087 1Z" stroke="#6F7F92" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.38086 7.05088H14.5795" stroke="#6F7F92" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className='aboutusF7'>
                                    <h6>Budget Friendly</h6>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                                </div>
                            </div>
                            <div className='aboutusF5'>
                                <div className='aboutusF6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none"><path d="M21.3787 9.06393L15.8246 13.5802C14.7752 14.4127 13.2988 14.4127 12.2494 13.5802L6.64844 9.06393" stroke="#6F7F92" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1361 24.2499C23.9378 24.2605 26.5 21.1369 26.5 17.298V8.71252C26.5 4.87353 23.9378 1.75 20.1361 1.75H7.86392C4.06223 1.75 1.5 4.87353 1.5 8.71252V17.298C1.5 21.1369 4.06223 24.2605 7.86392 24.2499H20.1361Z" stroke="#6F7F92" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className='aboutusF7'>
                                    <h6>Messaging System</h6>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='aboutusF2'>
                        <div className='aboutusF8'>
                            <img src={img} alt="" loading="lazy" />
                        </div>
                        <div className='aboutusF10'>
                            <div className='aboutusF11'>
                                <img src={img2} alt="" />
                                <h6>5k People <br /> choose Psykode</h6>
                            </div>
                        </div>
                        <div className='aboutusF9'>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsFirstComponent