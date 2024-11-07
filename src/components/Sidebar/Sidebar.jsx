import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import MyNavbar from '../Navbar/Navbar';
import { RiVerifiedBadgeFill, RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import img from '../../assest/profile pic.jpg';
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
import { GiBookshelf } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Toggle sidebar collapse/expand
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Toggle the "Courses" submenu
    const toggleCourseMenu = () => {
        setIsCourseMenuOpen(!isCourseMenuOpen);
    };

    const isActive = (path) => location.pathname === path;



    return (
        <>
            <div className='sidebar1'>
                <MyNavbar />
                <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className='sidebar11'>
                        <div className="profile">
                            <img
                                src={img}
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
                                <li className={`menu-item ${isActive('/activity') ? 'active' : ''}`} onClick={() => navigate('/activity')}>
                                    <BiChart className='menu-icons' />
                                    {!isCollapsed && <span>Activity</span>}
                                </li>
                                <li className={`menu-item ${isActive('/members') ? 'active' : ''}`} onClick={() => navigate('/members')}>
                                    <LuUsers2 className='menu-icons' />
                                    {!isCollapsed && <span>Members</span>}
                                </li>
                                <li className={`menu-item ${isActive('/groups') ? 'active' : ''}`}>
                                    <PiUsersThree className='menu-icons' />
                                    {!isCollapsed && <span>Groups</span>}
                                </li>
                                <li className={`menu-item ${isActive('/badges') ? 'active' : ''}`}>
                                    <IoShieldCheckmarkSharp className='menu-icons' />
                                    {!isCollapsed && <span>Badges</span>}
                                </li>
                                <li className={`menu-item ${isActive('/message') ? 'active' : ''}`}>
                                    <AiOutlineMessage className='menu-icons' />
                                    {!isCollapsed && <span>Message</span>}
                                </li>
                                <li className={`menu-item ${isActive('/shop') ? 'active' : ''}`}>
                                    <FaBagShopping className='menu-icons' />
                                    {!isCollapsed && <span>Shop</span>}
                                </li>

                                {/* Courses Menu Item with Submenu */}
                                <li className="menu-item" onClick={toggleCourseMenu}>
                                    <SiBookstack className='menu-icons' />
                                    {!isCollapsed && (
                                        <>
                                            <span>Courses</span>
                                            {isCourseMenuOpen ? <RiArrowDropUpLine className='menu-icons' /> : <RiArrowDropDownLine className='menu-icons' />}
                                        </>
                                    )}
                                </li>
                                {/* Submenu items for Courses */}
                                {isCourseMenuOpen && !isCollapsed && (
                                    <ul className="submenu">
                                        <li className={`menu-item ${isActive('/courses') ? 'active' : ''}`} onClick={() => navigate('/courses')}>
                                            <GiBookshelf className='menu-icons' />
                                            {!isCollapsed && <span>All Courses</span>}
                                        </li>
                                        <li className={`menu-item ${isActive('/courses/all') ? 'active' : ''}`}>
                                            <IoBookSharp className='menu-icons' />
                                            {!isCollapsed && <span>Courses Single</span>}
                                        </li>
                                    </ul>
                                )}

                                <li className="menu-item">
                                    <RiGamepadFill className='menu-icons' />
                                    {!isCollapsed && <span>Levels</span>}
                                </li>
                            </ul>
                        </div>

                        <div className="menu">
                            <h3>FORUM</h3>
                            <ul>
                                <li className={`menu-item ${isActive('/forums') ? 'active' : ''}`}>
                                    <BiChart className='menu-icons' />
                                    {!isCollapsed && <span>All Forums</span>}
                                </li>
                                <li className={`menu-item ${isActive('/forums/single') ? 'active' : ''}`}>
                                    <AiOutlineMessage className='menu-icons' />
                                    {!isCollapsed && <span>Forums Single</span>}
                                </li>
                                <li className={`menu-item ${isActive('/topic/single') ? 'active' : ''}`}>
                                    <CgNotes className='menu-icons' />
                                    {!isCollapsed && <span>Topic Single</span>}
                                </li>
                            </ul>
                        </div>

                        <div className="menu">
                            <h3>Others</h3>
                            <ul>
                                <li className="menu-item">
                                    <MdCardMembership className='menu-icons' />
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
    );
};

export default Sidebar;
