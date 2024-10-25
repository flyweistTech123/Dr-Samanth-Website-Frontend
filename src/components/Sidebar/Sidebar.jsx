import React, { useState } from 'react'

import './Sidebar.css'
import MyNavbar from '../Navbar/Navbar'

import { RiVerifiedBadgeFill } from "react-icons/ri";


import img from '../../assest/profile pic.jpg'

import { HiLockClosed } from "react-icons/hi";
import { BiChart } from "react-icons/bi";
import { LuUsers2 } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { RiGamepadFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdCardMembership } from "react-icons/md";



const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Toggle sidebar collapse/expand
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className='sidebar1'>
                <MyNavbar />
                <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className='sidebar11'>
                        <div className="profile">
                            <img
                                src={img} // Replace with actual profile image
                                alt="Profile"
                                className="profile-image"
                            />
                            {!isCollapsed && (
                                <div className="profile-details">
                                    <h4>
                                        Marvin McKinney
                                        <RiVerifiedBadgeFill color='#3897F0' />
                                    </h4>
                                    <p>@marvin</p>
                                </div>
                            )}
                        </div>
                        <div className="menu">
                            <h3>MENU</h3>
                            <ul>
                                <li className="menu-item active">
                                    <BiChart className='menu-icons' />
                                    {!isCollapsed && <span>Activity</span>}
                                </li>
                                <li className="menu-item">
                                    <LuUsers2 className='menu-icons' />
                                    {!isCollapsed && <span>Members</span>}
                                </li>
                                <li className="menu-item">
                                    <PiUsersThree className='menu-icons' />
                                    {!isCollapsed && <span>Groups</span>}
                                </li>
                                <li className="menu-item">
                                    <IoShieldCheckmarkSharp className='menu-icons' />
                                    {!isCollapsed && <span>Badges</span>}
                                </li>
                                <li className="menu-item">
                                    <AiOutlineMessage className='menu-icons' />
                                    {!isCollapsed && <span>Message</span>}
                                </li>
                                <li className="menu-item">
                                    <FaBagShopping className='menu-icons' />
                                    {!isCollapsed && <span>Shop</span>}
                                </li>
                                <li className="menu-item">
                                    <FaBagShopping className='menu-icons' />
                                    {!isCollapsed && <span>Course</span>}
                                </li>
                                <li className="menu-item">
                                    <RiGamepadFill  className='menu-icons' />
                                    {!isCollapsed && <span>Levels</span>}
                                </li>
                            </ul>

                        </div>
                        <div className="menu">
                            <h3>FORUM</h3>
                            <ul>
                                <li className="menu-item">
                                    <BiChart className='menu-icons' />
                                    {!isCollapsed && <span>All Forums</span>}
                                </li>
                                <li className="menu-item">
                                    <AiOutlineMessage className='menu-icons' />
                                    {!isCollapsed && <span>Forums Single</span>}
                                </li>
                                <li className="menu-item">
                                    <CgNotes  className='menu-icons' />
                                    {!isCollapsed && <span>Topic Single</span>}
                                </li>
                            </ul>

                        </div>
                        <div className="menu">
                            <h3>Others</h3>
                            <ul>
                                <li className="menu-item">
                                    <MdCardMembership  className='menu-icons' />
                                    {!isCollapsed && <span>Membership</span>}
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div className="footer-icons">
                        <div className="footer-icons1">
                            <HiLockClosed />
                            <GoBellFill />
                            <IoSettings />
                            <FaUsers />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar