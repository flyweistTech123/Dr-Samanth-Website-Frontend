import React from 'react';
import { FiSearch, FiSun } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import Dropdown from 'react-multilevel-dropdown';
import logo from '../../assest/logo-mini.svg'; // Path to your logo
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
            <div className="navbar4">
              <img src={logo} alt="Logo" />
              <h6>SocialV</h6>
            </div>

            {/* Links Section */}
            <div className="navbar-links">
              <a href="/">HOME</a>
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
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Activity</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Members</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Groups</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Badges</Dropdown.Item>
                    </div>
                    <div className="dropdown-column">
                      <Dropdown.Item>
                        <h6>Profile</h6>
                      </Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Timeline</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>About User</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>User's Timeline</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>User's Friends</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>User's Groups</Dropdown.Item>
                    </div>
                    <div className="dropdown-column">
                      <Dropdown.Item>
                        <h6>Forum</h6>
                      </Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>All Forums</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Forum Details</Dropdown.Item>
                      <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Topic Single</Dropdown.Item>
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
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }} onClick={()=>navigate('/aboutus')}>About Us</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Contact Us</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>frequently asked questions</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Terms & Condition</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Privacy Policy</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Coming Soon</Dropdown.Item>
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
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Blog Listing</Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      color: '#6f7f92',
                      fontSize: '.875em',
                      fontWeight: "600"
                    }}
                  >
                    Blog Grid
                    <Dropdown.Submenu
                      position="right"
                    >
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        2 Column
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        3 Column
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        3 Column+FullWidth
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        4 Column
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        4 Column+FullWidth
                      </Dropdown.Item>
                    </Dropdown.Submenu>
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      color: '#6f7f92',
                      fontSize: '.875em',
                      fontWeight: "600"
                    }}>
                    Blog Sidebar
                    <Dropdown.Submenu
                      position="right"
                    >
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Left Sidebar
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Right Sidebar
                      </Dropdown.Item>
                    </Dropdown.Submenu>

                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      color: '#6f7f92',
                      fontSize: '.875em',
                      fontWeight: "600"
                    }}>
                    Blog Single
                    <Dropdown.Submenu
                      position="right"
                    >
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Standard
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Video
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Audio
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Gallery
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Quote
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{
                          color: '#6f7f92',
                          fontSize: '.875em',
                          fontWeight: "600"
                        }}
                      >
                        Link
                      </Dropdown.Item>
                    </Dropdown.Submenu>
                  </Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Blog Detail</Dropdown.Item>
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
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Cart</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Checkout</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>Wishlist</Dropdown.Item>
                  <Dropdown.Item style={{ color: '#6f7f92', fontSize: '.875em', fontWeight: "600" }}>My Account</Dropdown.Item>
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
