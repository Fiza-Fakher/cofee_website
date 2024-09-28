import './Menu.css';
import { menu } from '../Data.jsx';  // Import named export 'menu'
import React from 'react';

const Menu = () => {
  return (
    <section className="menu-section">
      <h1 className="menu">Our Menu</h1>
      <h2 className="menu-title" >
        Let's Check Our Menu
      </h2>
      <div className="menu-grid">
        {menu.map(({ img, title, description, price }, index) => {
          return (
            <div className="menu-item" key={index}>
              <div className="menu-img-wrapper">
                <img src={img} alt="" className='menu-img' /> 
              </div>
              <div className="menu-data">
                <div>
                  <h3 className="menu-title">{title}</h3>
                  <p className="menu-description">{description}</p>
                </div>
                <span className="menu-price">${price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Menu;
