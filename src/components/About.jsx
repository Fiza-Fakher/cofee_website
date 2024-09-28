import React from 'react'
import './About.css';
import aboutImg from '../images/about-img.jpg'
import { FiCheckCircle } from "react-icons/fi";
 const About = () =>{
    return (
<section className="about-section" id='about'>
    <div className="about-grid ">
        <div className="about-img">
            <img src={aboutImg} alt="" className='about-img' />
        </div>
        <div className="about-content">
            <h1 className="about">About Us</h1>
            <h2 className="section-title" data-title='About Us'>
       Fresh Quality And Oragnic Tasty Coffeee House For You
            </h2>
            <p className="about-description">
                There are many variations of passages of Lorem 
                available , but 
                the majority have
                <br /> suffered alternation in some 
                form, by injected
                humour, or randomised words which don`t look even
                slightly
                believable.
            </p>
            <div className="about-details">
                <p className="about-details-description">
                <FiCheckCircle className='about-details-icon' />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="about-details-description">
                <FiCheckCircle className='about-details-icon' />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="about-details-description">
                <FiCheckCircle className='about-details-icon' />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

            </div>
            <a href="#team" className='btn'>Our Experts</a>
        </div>
    </div>
</section>
  )
}

export default About
