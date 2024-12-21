
// React Router
import { NavLink} from "react-router-dom"
import { useLocation } from 'react-router-dom';

// Style
import './Navbar.css';
import { useEffect, useState } from "react";

// Context
import { useScroll } from '../../context/ScrollContext'; 

const Navbar = () => {

    const location = useLocation();
    const [navClass, setNavClass] = useState('navbar-home');
    const { handleScroll } = useScroll();  // Usando o context


    useEffect(() => {

      const page = location.pathname;

      if(['/', '/inicio', '/sobre', '/contato'].includes(page)){
        setNavClass('navbar-home')
      }
      else{
        setNavClass('navbar-explore')
      }
     
      
      //desmontar componente
      return () => {
        
      };
    }, [location.pathname]);
    

  return (
    <nav className={navClass}>
        <ul>
            <li>
              <NavLink to="/inicio" className="nav-link" onClick={() => handleScroll('home')}>
                <img src='images/icon-home.png' className="icon-menu-home" alt="icon"/>
                <p className="navbar-p home-p">Início</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className="nav-link" onClick={() => handleScroll('about')}>
                <img src='images/icon-about.png' className="icon-menu-about" alt="icon"/>
                <p className="navbar-p">Sobre</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className="nav-link" onClick={() => handleScroll('contact')}>
                <img src='images/icon-contact.png' className="icon-menu-contact" alt="icon"/>
                <p className="navbar-p members-p">Contato</p>
              </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar