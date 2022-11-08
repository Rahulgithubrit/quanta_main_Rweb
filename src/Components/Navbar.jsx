import React, { useState } from "react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "./navbar.css"
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x';

function Navbar() {
  
  const [nav, setnav] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  

  window.addEventListener("scroll", changeBackground);
  const handleToggle = () => {
    setnav(!nav);
  }

  return (
    <nav className={nav ? 'nav_active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="Quanta logo" className="logo-img" />
      </a>
     
      <ul className="menu">
        <li className='nev_menu'>
          <Link to="/" className='nev_link'>
            Home
          </Link>
        </li>
        <li className='nev_menu'>
          <Link to="/resources" className='nev_link'>
            Resources
          </Link>
        </li>
        <li className='nev_menu'>
          <Link to="/team" className='nev_link'>
            Team
          </Link>
        </li>
        <li className='nev_menu'>
          <Link to="/projects" className='nev_link'>
            Projects
          </Link>
        </li>
        <li className='nev_menu'>
          <a href="#" className='active nev_link'>
            Contact us
          </a>
        </li>
      </ul>
      <div className='toggle-icon' onClick={handleToggle} >
        {nav ? <Icon icon={x} className="iconx" size="28" /> : <Icon icon={menu} size="28" />}
      </div>
    </nav>
  );
}

export default Navbar;
