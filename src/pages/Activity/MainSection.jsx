import React, { useState } from 'react'
import Dropdown from 'react-multilevel-dropdown';


import img from '../../assest/img29.jpg'
import img1 from '../../assest/img30.webp'
import img2 from '../../assest/profile pic.jpg'

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlinePushPin } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";


const MainSection = () => {
    const [showcomment, setShowComment] = useState(false)
    const [showpin, setShowPin] = useState(false)
    const [showfav, setShowFav] = useState(false)

    const toggleComment = () => {
        setShowComment(!showcomment)
    }
    const togglePin = () => {
        setShowPin(!showpin)
    }

    const toggleFav = () => {
        setShowFav(!showfav)
    }
    return (
        <>
            <div className='mainsection'>
                <div className='mainsection1'>
                    <div className='mainsection2'>
                        <div className='mainsection3'>
                            <img src={img} alt="" />
                        </div>
                        <div className='mainsection4'>
                            <div className='mainsection5'>
                                <p>
                                    <h4>
                                        Jenny Wilson
                                        <RiVerifiedBadgeFill color='#3897F0' />
                                    </h4>
                                    <h4><span>posted an update in the group </span> Three Amigos</h4>
                                </p>
                                <span className='mainsection6'>2 years ago</span>
                            </div>
                            <div className='mainsection7'>
                                <div className='mainsection8'>
                                    {showpin &&
                                        <MdOutlinePushPin />
                                    }
                                </div>

                                <Dropdown
                                    title={
                                        <div className="mainsection9">
                                            <MdOutlineMoreHoriz />
                                        </div>
                                    }
                                    className="mainsection28"
                                    position="left"
                                >
                                    <Dropdown.Item className='mainsection27' onClick={toggleFav}>
                                        <h6>{showfav ? "Remove Favorite" : "Add Favorite"}</h6>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='mainsection27' onClick={togglePin}>
                                        <h6> {showpin ? "Unpin" : "Pin to Top"}</h6>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='mainsection27'>
                                        <h6>Report</h6>
                                    </Dropdown.Item>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                    <div className='mainsection10'>
                        <div className='mainsection11'>
                            <p>
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                            </p>
                            <div className='mainsection12'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='mainsection13'>
                                <div className='mainsection14'>
                                    <div className='mainsection15'>
                                        <ul>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/angry.png" alt="angry" />
                                            </li>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png" alt="happy" />
                                            </li>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/like.png" alt="like" />
                                            </li>
                                        </ul>
                                    </div>
                                    <span>Reacted by <span>Jenny Wilson</span> And <span>6 Others </span></span>
                                </div>
                                <h6>3 Comments</h6>
                            </div>
                            <div className='mainsection16'>
                                <div className='mainsection19'>
                                    <div className='mainsection17'>
                                        <FaRegThumbsUp color='#6f7f92' size={20} />
                                        <span>like</span>
                                        <div className="reaction-wrapper">
                                            <div className="reaction-option" data-reaction_id="1" data-title="like">
                                                <img className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/like.png" alt="like" />
                                                {/* <span className="reaction-name">like</span> */}
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/dislike.png" alt="dislike" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/angry.png" alt="angry" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/funny.png" alt="funny" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png" alt="happy" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/love.png" alt="love" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/wow.png" alt="wow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mainsection18' onClick={toggleComment}>
                                        <AiOutlineMessage color='#6f7f92' size={20} />
                                        <span>Comment</span>
                                    </div>
                                </div>

                                <div className='mainsection18'>
                                    <CiShare2 color='#6f7f92' size={20} />
                                    <span>Share</span>
                                </div>
                            </div>
                            {showcomment &&
                                <div className='mainsection20'>
                                    <div className='mainsection21'>
                                        <div className='mainsection22'>
                                            <div className='mainsection23'>
                                                <img src={img2} alt="" />
                                            </div>
                                            <div className='mainsection24'>
                                                <div className='mainsection25'>
                                                    <textarea name="" id="" placeholder="Write a Comment ..."></textarea>
                                                </div>
                                                <div className='mainsection26'>
                                                    <FiSend color='#6f7f92' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='mainsection1'>
                    <div className='mainsection2'>
                        <div className='mainsection3'>
                            <img src={img} alt="" />
                        </div>
                        <div className='mainsection4'>
                            <div className='mainsection5'>
                                <p>
                                    <h4>
                                        Jenny Wilson
                                        <RiVerifiedBadgeFill color='#3897F0' />
                                    </h4>
                                    <h4><span>posted an update in the group </span> Three Amigos</h4>
                                </p>
                                <span className='mainsection6'>2 years ago</span>
                            </div>
                            <div className='mainsection7'>
                                <div className='mainsection8'>
                                    {showpin &&
                                        <MdOutlinePushPin />
                                    }
                                </div>

                                <Dropdown
                                    title={
                                        <div className="mainsection9">
                                            <MdOutlineMoreHoriz />
                                        </div>
                                    }
                                    className="mainsection28"
                                    position="left"
                                >
                                    <Dropdown.Item className='mainsection27' onClick={toggleFav}>
                                        <h6>{showfav ? "Remove Favorite" : "Add Favorite"}</h6>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='mainsection27' onClick={togglePin}>
                                        <h6> {showpin ? "Unpin" : "Pin to Top"}</h6>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='mainsection27'>
                                        <h6>Report</h6>
                                    </Dropdown.Item>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                    <div className='mainsection10'>
                        <div className='mainsection11'>
                            <p>
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                            </p>
                            <div className='mainsection12'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='mainsection13'>
                                <div className='mainsection14'>
                                    <div className='mainsection15'>
                                        <ul>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/angry.png" alt="angry" />
                                            </li>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png" alt="happy" />
                                            </li>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/like.png" alt="like" />
                                            </li>
                                        </ul>
                                    </div>
                                    <span>Reacted by <span>Jenny Wilson</span> And <span>6 Others </span></span>
                                </div>
                                <h6>3 Comments</h6>
                            </div>
                            <div className='mainsection16'>
                                <div className='mainsection19'>
                                    <div className='mainsection17'>
                                        <FaRegThumbsUp color='#6f7f92' size={20} />
                                        <span>like</span>
                                        <div className="reaction-wrapper">
                                            <div className="reaction-option" data-reaction_id="1" data-title="like">
                                                <img className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/like.png" alt="like" />
                                                {/* <span className="reaction-name">like</span> */}
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/dislike.png" alt="dislike" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/angry.png" alt="angry" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/funny.png" alt="funny" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png" alt="happy" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/love.png" alt="love" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/wow.png" alt="wow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mainsection18' onClick={toggleComment}>
                                        <AiOutlineMessage color='#6f7f92' size={20} />
                                        <span>Comment</span>
                                    </div>
                                </div>

                                <div className='mainsection18'>
                                    <CiShare2 color='#6f7f92' size={20} />
                                    <span>Share</span>
                                </div>
                            </div>
                            {showcomment &&
                                <div className='mainsection20'>
                                    <div className='mainsection21'>
                                        <div className='mainsection22'>
                                            <div className='mainsection23'>
                                                <img src={img2} alt="" />
                                            </div>
                                            <div className='mainsection24'>
                                                <div className='mainsection25'>
                                                    <textarea name="" id="" placeholder="Write a Comment ..."></textarea>
                                                </div>
                                                <div className='mainsection26'>
                                                    <FiSend color='#6f7f92' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='mainsection1'>
                    <div className='mainsection2'>
                        <div className='mainsection3'>
                            <img src={img} alt="" />
                        </div>
                        <div className='mainsection4'>
                            <div className='mainsection5'>
                                <p>
                                    <h4>
                                        Jenny Wilson
                                        <RiVerifiedBadgeFill color='#3897F0' />
                                    </h4>
                                    <h4><span>posted an update in the group </span> Three Amigos</h4>
                                </p>
                                <span className='mainsection6'>2 years ago</span>
                            </div>
                            <div className='mainsection7'>
                                <div className='mainsection8'>
                                    {showpin &&
                                        <MdOutlinePushPin />
                                    }
                                </div>

                                <Dropdown
                                    title={
                                        <div className="mainsection9">
                                            <MdOutlineMoreHoriz />
                                        </div>
                                    }
                                    className="mainsection28"
                                    position="left"
                                >
                                    <Dropdown.Item className='mainsection27' onClick={toggleFav}>
                                        <h6>{showfav ? "Remove Favorite" : "Add Favorite"}</h6>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='mainsection27' onClick={togglePin}>
                                        <h6> {showpin ? "Unpin" : "Pin to Top"}</h6>
                                    </Dropdown.Item>
                                    <Dropdown.Item className='mainsection27'>
                                        <h6>Report</h6>
                                    </Dropdown.Item>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                    <div className='mainsection10'>
                        <div className='mainsection11'>
                            <p>
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                                <img draggable="false" role="img" class="emoji" alt="😍" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f60d.svg" />
                            </p>
                            <div className='mainsection12'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='mainsection13'>
                                <div className='mainsection14'>
                                    <div className='mainsection15'>
                                        <ul>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/angry.png" alt="angry" />
                                            </li>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png" alt="happy" />
                                            </li>
                                            <li>
                                                <img decoding="async" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/like.png" alt="like" />
                                            </li>
                                        </ul>
                                    </div>
                                    <span>Reacted by <span>Jenny Wilson</span> And <span>6 Others </span></span>
                                </div>
                                <h6>3 Comments</h6>
                            </div>
                            <div className='mainsection16'>
                                <div className='mainsection19'>
                                    <div className='mainsection17'>
                                        <FaRegThumbsUp color='#6f7f92' size={20} />
                                        <span>like</span>
                                        <div className="reaction-wrapper">
                                            <div className="reaction-option" data-reaction_id="1" data-title="like">
                                                <img className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/like.png" alt="like" />
                                                {/* <span className="reaction-name">like</span> */}
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/dislike.png" alt="dislike" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/angry.png" alt="angry" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/funny.png" alt="funny" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/happy.png" alt="happy" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/love.png" alt="love" />
                                            </div>
                                            <div className="reaction-option" data-reaction_id="2" data-title="dislike">
                                                <img decoding="async" className="reaction-image" src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/plugins/iqonic-reactions/includes/assets/images/wow.png" alt="wow" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mainsection18' onClick={toggleComment}>
                                        <AiOutlineMessage color='#6f7f92' size={20} />
                                        <span>Comment</span>
                                    </div>
                                </div>

                                <div className='mainsection18'>
                                    <CiShare2 color='#6f7f92' size={20} />
                                    <span>Share</span>
                                </div>
                            </div>
                            {showcomment &&
                                <div className='mainsection20'>
                                    <div className='mainsection21'>
                                        <div className='mainsection22'>
                                            <div className='mainsection23'>
                                                <img src={img2} alt="" />
                                            </div>
                                            <div className='mainsection24'>
                                                <div className='mainsection25'>
                                                    <textarea name="" id="" placeholder="Write a Comment ..."></textarea>
                                                </div>
                                                <div className='mainsection26'>
                                                    <FiSend color='#6f7f92' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection