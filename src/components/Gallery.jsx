import React from 'react'
import './Gallery.css';
import { gallery } from "../Data";
import {BsPlusLg} from 'react-icons/bs';
const Gallery =()=> {
  return (
  <section className="gallery-section">
     <h1 className="about">Gallery</h1>
      <h2 className="section-title" data-title='About Us'>
        Our Gallery
      </h2>
      <div className="gallery-grid">
        {gallery.map(({ img,title},index)=>{
            return(
                <div className="gallery-item" key={index}>
                    <img src={img} alt="" className='gallery-img'/>
                <a href="/" className="gallery-icon">
                <BsPlusLg/></a>
     <h3 className="gallery-title">{title}</h3>
                </div>
            )
        })}
      </div>
  </section>
  )
}

export default Gallery
