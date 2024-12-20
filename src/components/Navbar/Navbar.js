
// React Router
import { NavLink} from "react-router-dom"

// Style
import './Navbar.css';

const Navbar = () => {

    //verifica qual página está
    const page = window.location.pathname;

    //função para rolamento na página
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <nav className={(page === '/' ||
     page === 'inicio' ||
      page === 'sobre' ||
       page === 'contato')
        ? 'navbar-home' : 'navbar-explore'}>
        <ul>
            <li>
              <NavLink to="/inicio" className="nav-link">
                <img src='images/icon-home.png' className="icon-menu-home"/>
                <p className="navbar-p home-p">Início</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className="nav-link" onClick={() => handleScroll('about')}>
                <img src='images/icon-about.png' className="icon-menu-about"/>
                <p className="navbar-p">Sobre</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className="nav-link" onClick={() => handleScroll('contact')}>
                <img src='images/icon-contact.png' className="icon-menu-contact"/>
                <p className="navbar-p members-p">Contato</p>
              </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar