import React from 'react'

import img3 from '../../assest/img20.png'


const SubscribeNewsletter = () => {
    return (
        <>
            <div className='newsletter'>
                <div className='newsletter1'>
                    <div className="newsletter2">
                        <h2>
                            Stay tuned and subscribe to our newsletter
                        </h2>
                    </div>
                    <div className="newsletter3">
                        A new platform for a new generation. Join to our newsletter to get early access. Never miss our latest news and other updates.
                    </div>
                </div>
                <div className='newsletter4'>
                    <div className='newsletter5'>
                        <input type="text" placeholder='Your email address' />
                        <div className='newsletter6'>
                            <p>SUBSCRIBE</p>
                        </div>
                    </div>
                    <div className='fivhome10'>
                        <img src={img3} alt="" />
                        <p style={{color:'white'}}>15k + people have already Downloaded  </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscribeNewsletter