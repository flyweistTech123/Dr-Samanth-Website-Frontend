import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";



const RightSideSection = () => {
    return (
        <>
            <div className='rightsidesection'>
                <div className='rightsidesection1'>
                    <div className='rightsidesection2'>
                        <span>Active User</span>
                    </div>
                    <div className='rightsidesection3'>
                        <p>There are no recently active members</p>
                    </div>
                </div>
                <div className='rightsidesection1'>
                    <div className='rightsidesection2'>
                        <span>Latest Activities</span>
                    </div>
                    <div className='rightsidesection4'>
                        <ul>
                            <li>
                                <img loading="lazy" decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/1/1696595070-bpthumb.jpg" class="d-block rounded-circle user-1-avatar avatar-50 photo" width="50" height="50" alt="Profile Photo" />
                                <div className='rightsidesection5'>
                                    <div className='rightsidesection6'>
                                        <h4>
                                            Jenny Wilson
                                            <RiVerifiedBadgeFill color='#3897F0' />
                                        </h4>
                                        <span>joined the group</span>
                                        <h4>Ultimate Nerds</h4>
                                    </div>
                                    <span>3 months ago</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='rightsidesection4'>
                        <ul>
                            <li>
                                <img loading="lazy" decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/1/1696595070-bpthumb.jpg" class="d-block rounded-circle user-1-avatar avatar-50 photo" width="50" height="50" alt="Profile Photo" />
                                <div className='rightsidesection5'>
                                    <div className='rightsidesection6'>
                                        <h4>
                                            Jenny Wilson
                                            <RiVerifiedBadgeFill color='#3897F0' />
                                        </h4>
                                        <span>posted an update</span>
                                        {/* <h4>Ultimate Nerds</h4> */}
                                    </div>
                                    <span>a year ago</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RightSideSection