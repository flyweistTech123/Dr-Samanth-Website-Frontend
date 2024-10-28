import React from 'react';
import { FiSearch, FiSun } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import Dropdown from 'react-multilevel-dropdown';
import logo from '../../assest/logo.jpeg'; // Path to your logo
import profilePic from '../../assest/profile pic.jpg'; // Path to the profile picture
import './Navbar.css';

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const MyNavbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="navbar1">
        <div className='navbar2'>
          <div className="navbar3">
            {/* Logo Section */}
            <div className="navbar4" onClick={() => navigate('/home')}>
              <img src={logo} alt="Logo" />
              {/* <h6>SocialV</h6> */}
            </div>

            {/* Links Section */}
            <div className="navbar-links">
              <a href="/home">HOME</a>
              <div className='navbar6'>
                <Dropdown
                  title="COMMUNITY"
                  className="navbar5"
                  position="right"
                  openOnHover={true}
                >
                  <div className="dropdown-container">
                    <div className="dropdown-column" style={{ fontWeight: "600" }}>
                      <Dropdown.Item>
                        <h6>SOCIAL</h6>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop"  onClick={() => navigate('/activity')}>
                        Activity
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        Members
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        Groups
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        Badges
                      </Dropdown.Item>
                    </div>
                    <div className="dropdown-column">
                      <Dropdown.Item>
                        <h6>Profile</h6>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        Timeline
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        About User
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        User's Timeline
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">
                        User's Friends
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">User's Groups</Dropdown.Item>
                    </div>
                    <div className="dropdown-column">
                      <Dropdown.Item>
                        <h6>Forum</h6>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop">All Forums</Dropdown.Item>
                      <Dropdown.Item className="drop">Forum Details</Dropdown.Item>
                      <Dropdown.Item className="drop">Topic Single</Dropdown.Item>
                    </div>
                  </div>
                </Dropdown>
                <MdOutlineKeyboardArrowDown color='#6f7f92' />
              </div>
              <div className='navbar6'>
                <Dropdown
                  title="PAGES"
                  className="navbar5"
                  position="right"
                  openOnHover={true}
                >
                  <Dropdown.Item
                    className="drop"
                    onClick={() => navigate('/aboutus')}>
                    About Us
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="drop"
                    onClick={() => navigate('/contactus')}>
                    Contact Us
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="drop"
                    onClick={() => navigate('/FAQ')}
                  >
                    frequently asked questions
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="drop"
                    onClick={() => navigate('/termscondition')}>
                    Terms & Condition
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="drop"
                    onClick={() => navigate('/privacypolicy')}>
                    Privacy Policy
                  </Dropdown.Item>
                  <Dropdown.Item className="drop" >Coming Soon</Dropdown.Item>
                </Dropdown>
                <MdOutlineKeyboardArrowDown color='#6f7f92' />
              </div>
              <div className='navbar6'>
                <Dropdown
                  title="BLOG"
                  className="navbar5"
                  position="right"
                  openOnHover={true}
                >
                  <Dropdown.Item className="drop">Blog Listing</Dropdown.Item>
                  <Dropdown.Item
                    className="drop"
                  >
                    Blog Grid
                    <Dropdown.Submenu
                      position="right"
                    >
                      <Dropdown.Item
                        className="drop"
                      >
                        2 Column
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        3 Column
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        3 Column+FullWidth
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        4 Column
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        4 Column+FullWidth
                      </Dropdown.Item>
                    </Dropdown.Submenu>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="drop">
                    Blog Sidebar
                    <Dropdown.Submenu
                      position="right"
                    >
                      <Dropdown.Item
                        className="drop"
                      >
                        Left Sidebar
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        Right Sidebar
                      </Dropdown.Item>
                    </Dropdown.Submenu>

                  </Dropdown.Item>
                  <Dropdown.Item
                    className="drop"
                  >
                    Blog Single
                    <Dropdown.Submenu
                      position="right"
                    >
                      <Dropdown.Item
                        className="drop"
                      >
                        Standard
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        Video
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        Audio
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"

                      >
                        Gallery
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        Quote
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop"
                      >
                        Link
                      </Dropdown.Item>
                    </Dropdown.Submenu>
                  </Dropdown.Item>
                  <Dropdown.Item className="drop" >
                    Blog Detail
                  </Dropdown.Item>
                </Dropdown>
                <MdOutlineKeyboardArrowDown color='#6f7f92' />
              </div>
              <div className='navbar6'>
                <Dropdown
                  title="SHOP"
                  className="navbar5"
                  position="right"
                  openOnHover={true}
                >
                  <Dropdown.Item className="drop" >Cart</Dropdown.Item>
                  <Dropdown.Item className="drop" >Checkout</Dropdown.Item>
                  <Dropdown.Item className="drop" >Wishlist</Dropdown.Item>
                  <Dropdown.Item className="drop" >My Account</Dropdown.Item>
                </Dropdown>
                <MdOutlineKeyboardArrowDown color='#6f7f92' />
              </div>
              <a href="/courses">COURSES</a>
            </div>
          </div>
          <div>
            <div className="navbar-icons">
              <FiSearch size={22} />
              <FiSun size={22} />
              <RiShoppingBagLine size={22} />
              <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
