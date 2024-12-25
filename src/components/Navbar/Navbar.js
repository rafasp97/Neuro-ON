import React, { useEffect, useState } from 'react';

// React Router 
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Style
import './Navbar.css';

// Context
import { useScroll } from '../../context/ScrollContext';



const Navbar = () => {

  const { handleScroll } = useScroll();

  const location = useLocation();
  const [navClass, setNavClass] = useState('navbar-home');

  useEffect(() => {
    const page = location.pathname;
    if (['/', '/inicio', '/sobre', '/contato'].includes(page)) {
      setNavClass('navbar-home');
    } else {
      setNavClass('navbar-explore');
    }
  }, [location.pathname]);


  // Usando caminhos relativos a partir da pasta 'public'
  const homeIcon = '/images/icon-home.png';
  const aboutIcon = '/images/icon-about.png';
  const contactIcon = '/images/icon-contact.png';

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <NavLink to="/inicio" className="nav-link" onClick={() => handleScroll('home')}>
            <img src={homeIcon} className="icon-menu-home" alt="Home" />
            <p className="navbar-p home-p">Início</p>
            
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre" className="nav-link" onClick={() => handleScroll('about')}>
            <img src={aboutIcon} className="icon-menu-about" alt="Sobre" />
            <p className="navbar-p">Sobre</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato" className="nav-link" onClick={() => handleScroll('contact')}>
            <img src={contactIcon} className="icon-menu-contact" alt="Contato" />
            <p className="navbar-p members-p">Contato</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
