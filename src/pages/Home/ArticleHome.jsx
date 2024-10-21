import React from 'react'

import img from '../../assest/img21.jpg'
import img1 from '../../assest/img22.jpg'
import img2 from '../../assest/img23.jpg'

import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";


const ArticleHome = () => {
    return (
        <>
            <div className='articlehome'>
                <div className="articlehome1">
                    <h2>
                        Our Latest Article
                    </h2>
                </div>
                <div className='articlehome2'>
                    <div className='articlehome3'>
                        <div className='articlehome4'>
                            <img src={img} alt="" />
                        </div>
                        <div className='articlehome5'>
                            <div className='articlehome6'>
                                <p>June 9, 2022</p>
                                <h6>Art Work</h6>
                            </div>
                            <div className='articlehome7'>
                                <h5>What is the Metaverse. How  it Will Change Social Connection?</h5>
                            </div>
                            <div className='articlehome8'>
                                <p>By: Jenny Wilson</p>
                                <div class="articlehome9">
                                    <TiHeartOutline color='#6f7f92' />
                                    <AiOutlineMessage color='#6f7f92' />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='articlehome3'>
                        <div className='articlehome4'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='articlehome5'>
                            <div className='articlehome6'>
                                <p>June 9, 2022</p>
                                <h6>Art Work</h6>
                            </div>
                            <div className='articlehome7'>
                                <h5>What is the Metaverse. How  it Will Change Social Connection?</h5>
                            </div>
                            <div className='articlehome8'>
                                <p>By: Jenny Wilson</p>
                                <div class="articlehome9">
                                    <TiHeartOutline color='#6f7f92' />
                                    <AiOutlineMessage color='#6f7f92' />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='articlehome3'>
                        <div className='articlehome4'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='articlehome5'>
                            <div className='articlehome6'>
                                <p>June 9, 2022</p>
                                <h6>Art Work</h6>
                            </div>
                            <div className='articlehome7'>
                                <h5>What is the Metaverse. How  it Will Change Social Connection?</h5>
                            </div>
                            <div className='articlehome8'>
                                <p>By: Jenny Wilson</p>
                                <div class="articlehome9">
                                    <TiHeartOutline color='#6f7f92' />
                                    <AiOutlineMessage color='#6f7f92' />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleHome