import React, { useState } from "react";
import logo from '../images/logo.png';
import { links } from '../Data';
import { FaStream } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="/" className="nav-logo">
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </a>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {links.map(({ name, path }, index) => (
              <li className="nav-item" key={index}>
                <a href={path} className="nav-link">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <FaStream />
        </div>
      </nav>
    </header>
  );
};

export default Header;
