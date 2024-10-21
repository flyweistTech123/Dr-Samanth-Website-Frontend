import React from 'react'


import img from '../../assest/img19.png'
import img1 from '../../assest/app-store.png'
import img2 from '../../assest/playstore.png'
import img3 from '../../assest/img20.png'

const FivthComponent = () => {
    return (
        <>
            <div className='fivhome'>
                <div className='fivhome1'>
                    <div className='fivhome2'>
                        <div className='fivhome3'>
                            <img src={img} alt="" />
                        </div>
                        <div className='fivhome4'>
                            <h3>Download the app and jump into it  </h3>
                            <div className='shome3'>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Lorem Ipsum is therefore always free from repetition,injected humour.  </p>
                            </div>
                        </div>
                    </div>
                    <div className='fivhome5'>
                        <div className='fivhome6'>
                            <div className='fivhome7'>
                                <h6>Download App From</h6>
                                <div className='fivhome8'>
                                    <div className='fivhome9'>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className='fivhome9'>
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <div className='fivhome10'>
                                    <img src={img3} alt="" />
                                    <p>15k + people have already Downloaded  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FivthComponent