import React from 'react';
import './Footer.css';

import img from '../../assest/app-store.png'
import img1 from '../../assest/playstore.png'
import img2 from '../../assest/logo.jpeg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo and App Links */}
                <div className="footer-section">
                    <div className="footer-section1">
                        <img src={img2} alt="Logo" />
                        {/* <h6>SocialV</h6> */}
                    </div>
                    <p>Download app from</p>
                    <div className="footer-app-links">
                        <a href="#!">
                            <img src={img} alt="App Store" className="app-store" />
                        </a>
                        <a href="#!">
                            <img src={img1} alt="Google Play" className="google-play" />
                        </a>
                    </div>
                </div>

                {/* Company Links */}
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Blog Detail</a></li>
                    </ul>
                </div>

                {/* Community Links */}
                <div className="footer-section">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#!">Activity</a></li>
                        <li><a href="#!">Timeline</a></li>
                        <li><a href="#!">Forums</a></li>
                        <li><a href="#!">Friends</a></li>
                    </ul>
                </div>

                {/* Help Links */}
                <div className="footer-section">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="/FAQ">Frequently Asked Questions</a></li>
                        <li><a href="/privacypolicy">Privacy Policy</a></li>
                        <li><a href="/termscondition">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Follow Us Links */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#!">Facebook</a></li>
                        <li><a href="#!">Instagram</a></li>
                        <li><a href="#!">Dribbble</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-section-bottom'>
                <p>© 2024 Psykode. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
