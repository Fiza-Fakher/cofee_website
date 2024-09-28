import React from 'react'
import './Footer.css';
import { FaRegEnvelope, FaCaretRight,FaFacebook,FaTwitter,FaLinkedinIn,FaYoutube } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn} from 'react-icons/md';
import logo from '../images/logo.png';
const Footer=()=> {
  return (
    <footer className="footer">
        <div className="footer-grid">
            <div className="footer-content">
                <a href="/" className="footer-logo">
                <img src={logo} alt="" className="footer-logo-img" />
                </a>
                <p className="footer-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eius pariatur 
                    voluptates? Magnam praesentium possimus cum perferendis nobis odio tempora dolor sit 
                    maxime! Illum magni dolorum consectetur.
                </p>
                <ul className="footer-contact">
                    <li className="footer-contact-item">
                        <AiOutlinePhone className='icon'/> +92 300 00000001
                    </li>

                    <li className="footer-contact-item">
                        <MdOutlineLocationOn className='icon'/> 25/B Milford Road, New York
                    </li>
                    <li className="footer-contact-item">
                        <FaRegEnvelope className='icon'/> info@example.com
                    </li>
                </ul>
            </div>
            <div className="footer-content">
                <h3 className="footer-title">QUICK LINKS</h3>
                <ul className="footer-links">
                    <li>
                        <a href="#about" className="footer-link">
                            <FaCaretRight className='icon'/> About Us
                        </a>
                    </li>
                    <li>
                        <a href="#menu" className="footer-link">
                            <FaCaretRight className='icon'/> Menu
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="footer-link">
                            <FaCaretRight className='icon'/> Features
                        </a>
                    </li>
                    <li>
                        <a href="#gallery" className="footer-link">
                            <FaCaretRight className='icon'/> Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#team" className="footer-link">
                            <FaCaretRight className='icon'/> Team
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-content">
                <h3 className="footer-title">Opening Hours</h3>
                <div className="footer-opening-hours">
                    <ul className="opening-hour-list">
                        <li className="opening-hour-item">
                            <span>Saturday</span>
                            <span>09Am - 06Pm</span>
                        </li>
                        <li className="opening-hour-item">
                            <span>Monday</span>
                            <span>09Am - 06Pm</span>
                        </li>
                        <li className="opening-hour-item">
                            <span>Tuesday</span>
                            <span>09Am - 06Pm</span>
                        </li>
                        <li className="opening-hour-item">
                            <span>Wednesday</span>
                            <span>09Am - 06Pm</span>
                        </li>
                        <li className="opening-hour-item">
                            <span>Thursday</span>
                            <span>09Am - 06Pm</span>
                        </li>
                        <li className="opening-hour-item">
                            <span>Friday</span>
                            <span>09Am - 06Pm</span>
                        </li>
                        <li className="opening-hour-item">
                            <span>Sunday</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-content">
                <h3 className="footer-title">Newsletter</h3>
            <p className="footer-description">
                Subscribe Our Newsletter to Get Latest Update And News 
            </p>
            <form action="" className="subscribe-form">
                <input type="text" placeholder='Your Email' className="form-input subscribe-input" />
                <button className="btn btn-flex subscribe-btn">
                    <FaRegEnvelope/> Subscribe Now
                </button>
            </form>
            <div className="footer-socials">
                <h3 className="footer-social-follow">follow Us:</h3>
                <div className="footer-social-links">
                    <a href="/" className="footer-social-link">
                    <FaFacebook/></a>
                    <a href="/" className="footer-social-link">
                    <FaTwitter/></a>
                    <a href="/" className="footer-social-link">
                    <FaLinkedinIn/></a>
                    <a href="/" className="footer-social-link">
                    <FaYoutube/></a>
                </div>
            </div>
            </div>
        </div>
        <p className="copyright-text">
            &copy; Copyright 2024 <span>Coffero</span>All rights Reserved.
        </p>
    </footer>
  )
}

export default Footer
